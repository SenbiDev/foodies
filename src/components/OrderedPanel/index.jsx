import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Box,
    Stack,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from "@mui/material";
import ItemOrdered from "../ItemOrdered";
import { selectOrderItem, getOrderListAsync } from "../../redux/reducers/orderItemSlice";
import useWidth from "../../hooks/useWidth";
import { orderedPanelComponentStyles } from '../../styles/componentStyles';

function OrderedPanel({ value, index }) {
    const { orders = [] } = useSelector(selectOrderItem);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const breakpoints = useWidth();

    useEffect(() => {
        dispatch(getOrderListAsync());
        setTimeout(() => setLoading(false), 1000);
    }, [dispatch]);

    return (
        <Box hidden={value !== index} sx={orderedPanelComponentStyles.container}>
            {
                orders.length === 0 && loading === false
                    ?
                    <Stack alignItems={'center'} useFlexGap gap={'40px'} sx={orderedPanelComponentStyles.emptyStateContainer}>
                        <Typography sx={{ fontSize: {} }}>
                            Pesanan Kosong
                        </Typography>
                    </Stack>
                    :
                    <>
                        {
                            ['xs', 'sm'].includes(breakpoints) &&
                            <Stack useFlexGap gap={'20px'} sx={{}}>
                                {
                                    orders.map(({ order_number, delivery_fee, order_items, status, _id }, index) => {
                                        const priceList = order_items.map(({ price, qty }) => price * qty);
                                        const subtotal = priceList.reduce((subtotal, price) => subtotal + price, 0)
                                        const total = delivery_fee + subtotal;
                                        const productOrderedList = order_items.map(({ name, qty, price }) => ({ name, qty, price }));

                                        return (<ItemOrdered key={index} orderId={order_number} total={total} status={status} _id={_id} productOrderedList={productOrderedList} />)
                                    })
                                }
                            </Stack>
                        }
                        {
                            ['md', 'lg', 'xl'].includes(breakpoints) &&
                            <TableContainer>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align='left' sx={orderedPanelComponentStyles.tableCell}></TableCell>
                                            <TableCell sx={orderedPanelComponentStyles.tableCell}>Order ID</TableCell>
                                            <TableCell align='center' sx={orderedPanelComponentStyles.tableCell}>Total</TableCell>
                                            <TableCell align='center' sx={orderedPanelComponentStyles.tableCell}>Status</TableCell>
                                            <TableCell align='right' sx={[orderedPanelComponentStyles.tableCell, { paddingRight: '10px' }]}>Invoice</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            orders.map(({ order_number, delivery_fee, order_items, status, _id }, index) => {
                                                const priceList = order_items.map(({ price, qty }) => price * qty);
                                                const subtotal = priceList.reduce((subtotal, price) => subtotal + price, 0)
                                                const total = delivery_fee + subtotal;
                                                const productOrderedList = order_items.map(({ name, qty, price }) => ({ name, qty, price }));

                                                return (<ItemOrdered key={index} orderId={order_number} total={total} status={status} _id={_id} productOrderedList={productOrderedList} index={index} ordersLength={orders.length - 1} />)
                                            })
                                        }
                                    </TableBody>

                                </Table>
                            </TableContainer>
                        }
                    </>
            }
        </Box>
    )
}

export default OrderedPanel;