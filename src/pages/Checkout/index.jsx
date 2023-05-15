import { useEffect } from "react";
import {
    Stack,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from "@mui/material";
import { BoxContainer, BackwardFordward } from '../../components';
import { useSelector, useDispatch } from "react-redux";
import { selectOrderItem, getOrderItem } from "../../redux/reducers/orderItemSlice";
import formatToCurrency from "../../utils/formatToCurrency";
import { checkoutPageStyles } from '../../styles/pageStyles';

function Checkout() {
    const { orderItem } = useSelector(selectOrderItem);
    const { subtotal = 0 } = orderItem;
    const ongkir = 20000;
    const total = subtotal + ongkir;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderItem());
    }, [dispatch]);

    return (
        <BoxContainer title={'Checkout'} endContent={<BackwardFordward to={'/invoice'} />}>
            <Stack alignItems={{ xs: 'center', sm: 'flex-start' }} sx={checkoutPageStyles.descriptionContainer}>
                <Typography sx={checkoutPageStyles.descriptionContent}>
                    Konfirmasi
                </Typography>
            </Stack>
            {

            }
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={checkoutPageStyles.tableHeadContent1}></TableCell>
                            <TableCell sx={checkoutPageStyles.tableHeadContent2}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={checkoutPageStyles.tableRow}>
                            <TableCell sx={checkoutPageStyles.tableCell}>
                                <Typography sx={checkoutPageStyles.tableContent1.key}>
                                    Alamat
                                </Typography>
                            </TableCell>
                            <TableCell sx={checkoutPageStyles.tableCell}>
                                <Stack useFlexGap gap={'20px'}>
                                    <Typography sx={checkoutPageStyles.tableContent1.value.content1}>
                                        {orderItem?.nama}
                                    </Typography>

                                    <Typography sx={checkoutPageStyles.tableContent1.value.content2}>
                                        {orderItem?.provinsi}, {orderItem?.kabupaten}, {orderItem?.kecamatan}, {orderItem?.kelurahan}, {orderItem?.detail} 
                                    </Typography>
                                </Stack>
                            </TableCell>
                        </TableRow>

                        <TableRow sx={checkoutPageStyles.tableRow}>
                            <TableCell sx={checkoutPageStyles.tableCell}>
                                <Typography sx={checkoutPageStyles.tableContent2.key}>
                                    Subtotal
                                </Typography>
                            </TableCell>
                            <TableCell sx={checkoutPageStyles.tableCell}>
                                <Typography sx={checkoutPageStyles.tableContent2.value}>
                                    {formatToCurrency(subtotal)}
                                </Typography>
                            </TableCell>
                        </TableRow>

                        <TableRow sx={checkoutPageStyles.tableRow}>
                            <TableCell sx={checkoutPageStyles.tableCell}>
                                <Typography sx={checkoutPageStyles.tableContent3.key}>
                                    Ongkir
                                </Typography>
                            </TableCell>
                            <TableCell sx={checkoutPageStyles.tableCell}>
                                <Typography sx={checkoutPageStyles.tableContent3.value}>
                                    {formatToCurrency(ongkir)}
                                </Typography>
                            </TableCell>
                        </TableRow>

                        <TableRow sx={checkoutPageStyles.tableRow}>
                            <TableCell sx={checkoutPageStyles.tableCell}>
                                <Typography sx={checkoutPageStyles.tableContent4.key}>
                                    Total
                                </Typography>
                            </TableCell>
                            <TableCell sx={checkoutPageStyles.tableCell}>
                                <Typography sx={checkoutPageStyles.tableContent4.value}>
                                    {formatToCurrency(total)}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </BoxContainer>
    );
}

export default Checkout;