import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Stack,
    Zoom,
    Typography,
    Divider,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Skeleton
} from "@mui/material";
import { BoxContainer, CustomTooltip, CartNavigation, Counter, Image } from '../../components';
import useWidth from "../../hooks/useWidth";
import { selectCarts, getCartsAsync } from "../../redux/reducers/cartsSlice";
import formatToCurrency from "../../utils/formatToCurrency";
import { cartPageStyles } from '../../styles/pageStyles';

function Cart() {
    const { carts = [] } = useSelector(selectCarts);
    const dispatch = useDispatch();
    const breakpoints = useWidth();
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const priceList = carts.map(({ price, qty }) => price * qty);

    useEffect(() => {
        dispatch(getCartsAsync());
        setTimeout(() => setLoading(false), 1000);
    }, [dispatch]);

    const onHoverClose = () => {
        setShow(false);
    };
    
    const onHoverOpen = () => {
        setShow(true);
    };
      
    const onClickToggleOpen = () => {
        setShow(true);
    };

    return (
        <BoxContainer title={ carts.length !== 0 && 'Keranjang'} endContent={ carts.length !== 0 && <CartNavigation priceList={priceList} />}>
            {
                carts.length === 0 && loading === false
                ?
                    <Stack alignItems={'center'} useFlexGap gap={'40px'}>
                        <Image type='empty-state-image' src="./images/empty-state.png" />
                        <Typography sx={cartPageStyles.emptyStateContent}>
                            Keranjang Kosong
                        </Typography>
                    </Stack>
                :
                <>
                    {
                        ['xs', 'sm'].includes(breakpoints) &&
                        <Stack useFlexGap gap={'50px'} sx={cartPageStyles.cartsContainer}>
                            {
                                carts.map(({ _id, image_url, name, price, qty }, index) =>
                                    <Stack key={index} useFlexGap gap={'50px'}>
                                        <Stack id='cart-items-container' direction={'row'} flexWrap={'wrap'} justifyContent={'center'} useFlexGap gap={{ xs: '20px' }}>
                                            {
                                                loading
                                                ?
                                                <Skeleton variant='rounded' animation='wave' sx={{ width: { xs: '143px', sm: '168px' }, height: { xs: '97px', sm: '114px' } }} />
                                                :
                                                <Image type='product-image' src={image_url} />
                                            }

                                            <Stack id='cart-items-info' alignItems={'center'} useFlexGap gap={'10px'}>
                                                <Stack id='cart-items-name-price' useFlexGap gap={'2px'}>
                                                    {
                                                        loading
                                                        ?
                                                        <Skeleton animation='wave' sx={{ width: '80px', height: '24px' }} />
                                                        :
                                                        <CustomTooltip
                                                            arrow
                                                            title={name}
                                                            placement="bottom-end"
                                                            TransitionComponent={Zoom}
                                                            open={show}
                                                            onOpen={onHoverOpen}
                                                            onClose={onHoverClose}
                                                            onClick={onClickToggleOpen}
                                                        >
                                                            <Typography sx={cartPageStyles.cartItemName}>
                                                                {name}
                                                            </Typography>
                                                        </CustomTooltip>

                                                    }

                                                    {
                                                        loading
                                                        ?
                                                        <Skeleton animation='wave' sx={{ width: '80px', height: '24px' }} />
                                                        :
                                                        <Typography>
                                                            {formatToCurrency(price)}
                                                        </Typography>
                                                    }
                                                </Stack>
                                                
                                                {
                                                    loading
                                                    ?
                                                    <Skeleton animation='wave' sx={{ width: '80px', height: '24px' }} />
                                                    :
                                                    <Counter carts={carts} _id={_id} quantity={qty} />
                                                }
                                            </Stack>
                                        </Stack>
                                        {
                                            index !== (carts.length - 1) &&
                                            <Divider sx={cartPageStyles.divider} />
                                        }
                                    </Stack>
                                )
                            }
                        </Stack>
                    }
                    {
                        ['md', 'lg', 'xl'].includes(breakpoints) &&
                        <>
                            <TableContainer sx={cartPageStyles.tableContainer}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align='left' sx={cartPageStyles.tableHeadContent1}>
                                                {
                                                    loading
                                                    ?
                                                    <Skeleton animation='wave' sx={{ width: { md: '62px' } }} />
                                                    :
                                                    'Gambar'
                                                }
                                            </TableCell>
                                            <TableCell align='left' sx={cartPageStyles.tableHeadContent2}>
                                                {
                                                    loading
                                                    ?
                                                    <Skeleton animation='wave' sx={{ width: { md: '62px' } }} />
                                                    :
                                                    'Nama'
                                                }
                                            </TableCell>
                                            <TableCell align='left' sx={cartPageStyles.tableHeadContent3}>
                                                {
                                                    loading
                                                    ?
                                                    <Skeleton animation='wave' sx={{ width: { md: '62px' } }} />
                                                    :
                                                    'Harga'
                                                }
                                            </TableCell>
                                            <TableCell align='right'sx={cartPageStyles.tableHeadContent4}>
                                                {
                                                    loading
                                                    ?
                                                    <Skeleton animation='wave' sx={{ width: { md: '62px' } }} />
                                                    :
                                                    'Kuantitas'
                                                }
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {carts.map(({ _id, image_url, name, price, qty }, index) =>
                                            <TableRow key={index} sx={cartPageStyles.tableRowContainer}>
                                                <TableCell align='left' sx={cartPageStyles.tableRowContent1}>
                                                    {
                                                        loading
                                                        ?
                                                        <Skeleton variant='rounded' animation='wave' sx={{ width: { md: '136px', lg: '215px' }, height: { md: '93px', lg: '145px' } }} />
                                                        :
                                                        <Image type='product-image' src={image_url} />
                                                    }
                                                </TableCell>
                                                <TableCell align='left' sx={cartPageStyles.tableRowContent2}>
                                                    {
                                                        loading
                                                        ?
                                                        <Skeleton sx={{ width: { md: '120px' }, height: { md: '24px' } }} />
                                                        :
                                                        <Typography>
                                                            {name}
                                                        </Typography>
                                                    }
                                                </TableCell>
                                                <TableCell align='left' sx={cartPageStyles.tableRowContent3}>
                                                    {
                                                        loading
                                                        ?
                                                        <Skeleton animation='wave' sx={{ width: { md: '120px' }, height: { md: '24px' } }} />
                                                        :
                                                        <Typography>
                                                            {formatToCurrency(price)}
                                                        </Typography>
                                                    }
                                                </TableCell>
                                                <TableCell align='right' sx={cartPageStyles.tableRowContent4}>
                                                    {
                                                        loading
                                                        ?
                                                        <Skeleton animation='wave' sx={{ width: { md: '80px' }, height: { md: '24px' } }} />
                                                        :  
                                                        <Counter carts={carts} _id={_id} quantity={qty} />
                                                    }
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    }
                </>
            }
        </BoxContainer>
    );
}

export default Cart;