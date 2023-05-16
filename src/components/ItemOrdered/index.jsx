import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
    Box,
    Stack,
    Typography,
    Button,
    Divider,
    Collapse,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from "@mui/material";
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import useWidth from "../../hooks/useWidth";
import formatToCurrency from "../../utils/formatToCurrency";
import { itemOrderedComponentStyles } from '../../styles/componentStyles';


function ItemOrdered({ orderId, total, status, _id, productOrderedList = [], index, ordersLength }) {
    const breakpoints = useWidth();
    const [show, setShow] = useState(false);

    return (
        <>
            {
                ['xs', 'sm'].includes(breakpoints) &&
                <Box sx={itemOrderedComponentStyles.boxContainer}>
                    <Box sx={itemOrderedComponentStyles.orderSummaryXS}>
                        <Stack useFlexGap gap={'15px'}>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Typography sx={{ color: 'white' }}>
                                    #{orderId}
                                </Typography>
                                {
                                    show
                                        ?
                                        <KeyboardArrowUpRoundedIcon sx={itemOrderedComponentStyles.icon('white')} onClick={() => setShow(!show)} />
                                        :
                                        <KeyboardArrowDownRoundedIcon sx={itemOrderedComponentStyles.icon('white')} onClick={() => setShow(!show)} />
                                }
                            </Stack>
                            <Typography sx={{ color: 'white' }}>
                                {formatToCurrency(total)}
                            </Typography>
                            <Typography sx={{ color: 'white' }}>
                                {status}
                            </Typography>
                        </Stack>

                        <Stack alignItems={{ xs: 'center', sm: 'flex-end' }} sx={{ marginTop: '50px' }}>
                            <RouterLink to={`/invoice/${_id}`} style={{ textDecoration: 'none' }}>
                                <Button variant='contained' sx={itemOrderedComponentStyles.detailButtonXS}>
                                    detail
                                </Button>
                            </RouterLink>
                        </Stack>
                    </Box>

                    <Collapse in={show}>

                        <Divider sx={itemOrderedComponentStyles.divider} />

                        {
                            ['xs'].includes(breakpoints) &&
                            <Box sx={itemOrderedComponentStyles.boxContainerXsSm}>
                                <Stack useFlexGap gap={'30px'}>
                                    {
                                        productOrderedList.map(({ name, qty, price }, index) =>
                                            <Stack key={index} useFlexGap gap={'30px'}>
                                                <Stack useFlexGap gap={'5px'}>
                                                    <Typography sx={{ color: 'white' }}>
                                                        {name}
                                                    </Typography>
                                                    <Typography sx={{ color: 'white' }}>
                                                        {qty}x
                                                    </Typography>
                                                    <Typography sx={{ color: 'white' }}>
                                                        {formatToCurrency(price)}
                                                    </Typography>
                                                </Stack>
                                                {
                                                    index !== (productOrderedList.length - 1) &&
                                                    <Divider sx={itemOrderedComponentStyles.divider} />
                                                }
                                            </Stack>
                                    )}

                                </Stack>
                            </Box>
                        }
                        {
                            ['sm'].includes(breakpoints) &&
                            <Box sx={itemOrderedComponentStyles.boxContainerXsSm}>
                                <TableContainer>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={[itemOrderedComponentStyles.tableHeadSMContent, { paddingRight: '70px' }]}></TableCell>
                                                <TableCell sx={[itemOrderedComponentStyles.tableHeadSMContent, { paddingRight: '110px' }]}></TableCell>
                                                <TableCell sx={itemOrderedComponentStyles.tableHeadSMContent}></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                productOrderedList.map(({ name, qty, price }, index) =>
                                                    <TableRow key={index} sx={itemOrderedComponentStyles.tableRowSM}>
                                                        <TableCell sx={itemOrderedComponentStyles.orderDetailSmContent}>
                                                            <Typography sx={{ color: 'white', width: '73px' }}>
                                                                {name}
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell sx={itemOrderedComponentStyles.orderDetailSmContent} align='center'>
                                                            <Typography sx={{ color: 'white' }}>
                                                                {qty}x
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell sx={itemOrderedComponentStyles.orderDetailSmContent} align='right'>
                                                            <Typography sx={{ color: 'white' }}>
                                                                {formatToCurrency(price)}
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        }

                    </Collapse>
                </Box>
            }
            {
                ['md', 'lg', 'xl'].includes(breakpoints) &&
                <>
                    <TableRow id='table-row-nested-container'>
                        <TableCell sx={itemOrderedComponentStyles.orderSummaryMD(show, index, ordersLength)} >
                            {
                                show
                                    ?
                                    <KeyboardArrowUpRoundedIcon sx={itemOrderedComponentStyles.icon('black')} onClick={() => setShow(!show)} />
                                    :
                                    <KeyboardArrowDownRoundedIcon sx={itemOrderedComponentStyles.icon('black')} onClick={() => setShow(!show)} />
                            }
                        </TableCell>
                        <TableCell sx={itemOrderedComponentStyles.orderSummaryMD(show, index, ordersLength)}>
                            #{orderId}
                        </TableCell>
                        <TableCell align='center' sx={[{ paddingX: 0 }, itemOrderedComponentStyles.orderSummaryMD(show, index, ordersLength)]}>
                            <Typography>
                                {formatToCurrency(total)}
                            </Typography>
                        </TableCell>
                        <TableCell align='center' sx={[{ paddingX: 0 }, itemOrderedComponentStyles.orderSummaryMD(show, index, ordersLength)]}>
                            <Typography>
                                {status}
                            </Typography>
                        </TableCell>
                        <TableCell align='right' sx={[{ paddingX: 0 }, itemOrderedComponentStyles.orderSummaryMD(show, index, ordersLength)]}>
                            <RouterLink to={`/invoice/${_id}`} style={{ textDecoration: 'none' }}>
                                <Button sx={itemOrderedComponentStyles.detailButtonMD}>
                                    detail
                                </Button>
                            </RouterLink>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell style={itemOrderedComponentStyles.orderDetailMdContainer(show)} colSpan={6}  >
                            <Collapse in={show} timeout="auto" unmountOnExit>
                                <Box sx={{ margin: 1 }}>
                                    <Typography variant="h6" gutterBottom component="div">
                                        Telah Dipesan
                                    </Typography>
                                    <Table size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={itemOrderedComponentStyles.tableHeadMdContent}>Barang</TableCell>
                                                <TableCell align='center' sx={itemOrderedComponentStyles.tableHeadMdContent}>Jumlah</TableCell>
                                                <TableCell align='right' sx={itemOrderedComponentStyles.tableHeadMdContent}>Total Harga</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                productOrderedList.map(({ name, qty, price }, index) =>
                                                    <TableRow key={index}  sx={itemOrderedComponentStyles.tableRowMD}>
                                                        <TableCell component="th" scope="row" sx={itemOrderedComponentStyles.orderDetailMdContent}>
                                                            <Typography>
                                                                {name}
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell align='center' sx={itemOrderedComponentStyles.orderDetailMdContent}>
                                                            <Typography>
                                                                {qty}x
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell align='right' sx={itemOrderedComponentStyles.orderDetailMdContent}>
                                                            <Typography>
                                                                {formatToCurrency(price)}
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            }
                                        </TableBody>
                                    </Table>
                                </Box>
                            </Collapse>
                        </TableCell>
                    </TableRow>
                </>
            }
        </>
    );
}

export default ItemOrdered;