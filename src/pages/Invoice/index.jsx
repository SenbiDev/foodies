import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
    Stack,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Skeleton
} from "@mui/material";
import { BoxContainer } from '../../components';
import { selectOrderItem } from "../../redux/reducers/orderItemSlice";
import { selectInvoice, getInvoiceByIdAsync } from "../../redux/reducers/invoiceSlice";
import formatToCurrency from "../../utils/formatToCurrency";
import { invoicePageStyles } from '../../styles/pageStyles';

function Invoice() {
    const { invoice = {}, orderNumber } = useSelector(selectInvoice);
    const { orderId } = useSelector(selectOrderItem);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const path = location.pathname.replace('/invoice/', '');

    useEffect(() => {
        dispatch(getInvoiceByIdAsync({ order_id: location.pathname === '/invoice' ? orderId : path }));
        setTimeout(() => setLoading(false), 1000);
    }, [dispatch, location.pathname, orderId, path]);

    return (
        <BoxContainer title={'Invoice'}>
            <TableContainer sx={invoicePageStyles.tableContainer}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={invoicePageStyles.tableHeadContent1}></TableCell>
                            <TableCell sx={invoicePageStyles.tableHeadContent2}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={invoicePageStyles.tableRow}>
                            <TableCell sx={invoicePageStyles.tableCell}>
                                {
                                    loading
                                    ?
                                    <Skeleton animation='wave' sx={{ width: { xs: '130px', sm: '160px', md: '240px', lg: '340px', xl: '400px' }, height: '24px' }} />
                                    :
                                    <Typography sx={invoicePageStyles.tableContent1.key}>
                                        Status
                                    </Typography>
                                }
                            </TableCell>
                            <TableCell sx={invoicePageStyles.tableCell}>
                                {
                                    loading
                                    ?
                                    <Skeleton animation='wave' sx={{ width: { xs: '130px', sm: '160px', md: '300px', lg: '460px', xl: '600px' }, height: '24px' }} />
                                    :
                                    <Typography sx={invoicePageStyles.tableContent1.value}>
                                        {invoice.payment_status}
                                    </Typography>
                                }
                            </TableCell>
                        </TableRow>

                        <TableRow sx={invoicePageStyles.tableRow}>
                            <TableCell sx={invoicePageStyles.tableCell}>
                                {
                                    loading
                                    ?
                                    <Skeleton animation='wave' sx={{ width: { xs: '130px', sm: '160px', md: '240px', lg: '340px', xl: '400px' }, height: '24px' }} />
                                    :
                                    <Typography sx={invoicePageStyles.tableContent2.key}>
                                        Order ID
                                    </Typography>
                                }
                            </TableCell>
                            <TableCell sx={invoicePageStyles.tableCell}>
                                {
                                    loading
                                    ?
                                    <Skeleton animation='wave' sx={{ width: { xs: '130px', sm: '160px', md: '300px', lg: '460px', xl: '600px' }, height: '24px' }} />
                                    :
                                    <Typography sx={invoicePageStyles.tableContent2.value}>
                                        #{orderNumber}
                                    </Typography>
                                }
                            </TableCell>
                        </TableRow>

                        <TableRow sx={invoicePageStyles.tableRow}>
                            <TableCell sx={invoicePageStyles.tableCell}>
                                {
                                    loading
                                    ?
                                    <Skeleton animation='wave' sx={{ width: { xs: '130px', sm: '160px', md: '240px', lg: '340px', xl: '400px' }, height: '24px' }} />
                                    :
                                    <Typography sx={invoicePageStyles.tableContent3.key}>
                                        Total Amount
                                    </Typography>
                                }
                            </TableCell>
                            <TableCell sx={invoicePageStyles.tableCell}>
                                {
                                    loading
                                    ?
                                    <Skeleton animation='wave' sx={{ width: { xs: '130px', sm: '160px', md: '300px', lg: '460px', xl: '600px' }, height: '24px' }} />
                                    :
                                    <Typography sx={invoicePageStyles.tableContent3.value}>
                                        {formatToCurrency(invoice.total)}
                                    </Typography>
                                }
                            </TableCell>
                        </TableRow>

                        <TableRow sx={invoicePageStyles.tableRow}>
                            <TableCell sx={invoicePageStyles.tableCell}>
                                {
                                    loading
                                    ?
                                    <Skeleton animation='wave' sx={{ width: { xs: '130px', sm: '160px', md: '240px', lg: '340px', xl: '400px' }, height: '24px' }} />
                                    :
                                    <Typography sx={invoicePageStyles.tableContent4.key}>
                                        Billed To
                                    </Typography>
                                }
                            </TableCell>
                            <TableCell sx={invoicePageStyles.tableCell}>
                                {
                                    loading
                                    ?
                                    <Skeleton animation='wave' sx={{ width: { xs: '130px', sm: '160px', md: '300px', lg: '460px', xl: '600px' }, height: '24px' }} />
                                    :
                                    <Stack useFlexGap gap={'20px'}>
                                        <Stack useFlexGap gap={'4px'}>
                                            <Typography sx={invoicePageStyles.tableContent4.value.content1}>
                                                {invoice?.user?.full_name}
                                            </Typography>
                                            <Typography sx={invoicePageStyles.tableContent4.value.content2}>
                                                {invoice?.user?.email}
                                            </Typography>
                                        </Stack>

                                        <Typography>
                                            {invoice?.delivery_address?.provinsi}, {invoice?.delivery_address?.kabupaten}, {invoice?.delivery_address?.kecamatan}, {invoice?.delivery_address?.kelurahan}, {invoice?.delivery_address?.detail}
                                        </Typography>
                                    </Stack>
                                }
                            </TableCell>
                        </TableRow>

                        <TableRow sx={invoicePageStyles.tableRow}>
                            <TableCell sx={invoicePageStyles.tableCell}>
                                {
                                    loading
                                    ?
                                    <Skeleton animation='wave' sx={{ width: { xs: '130px', sm: '160px', md: '240px', lg: '340px', xl: '400px' }, height: '24px' }} />
                                    :
                                    <Typography sx={invoicePageStyles.tableContent5.key}>
                                        Payment To
                                    </Typography>
                                }
                            </TableCell>
                            <TableCell sx={invoicePageStyles.tableCell}>
                                {
                                    loading
                                    ?
                                    <Skeleton animation='wave' sx={{ width: { xs: '130px', sm: '160px', md: '300px', lg: '460px', xl: '600px' }, height: '24px' }} />
                                    :
                                    <Stack useFlexGap gap={'20px'}>
                                        <Stack useFlexGap gap={'4px'}>
                                            <Typography sx={invoicePageStyles.tableContent5.value.content1}>
                                                Edi Hartono
                                            </Typography>
                                            <Typography sx={invoicePageStyles.tableContent5.value.content2}>
                                                edyh221@gmail.com
                                            </Typography>
                                        </Stack>

                                        <Typography>
                                            BCA
                                            <br />
                                            XXXXX-XXXXX-334-34
                                        </Typography>
                                    </Stack>
                                }
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </BoxContainer>
    );
}

export default Invoice;