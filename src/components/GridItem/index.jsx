import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Stack, Typography, Skeleton, Zoom } from "@mui/material";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { CustomTooltip, Image } from '../../components';
import { selectCarts, getCartsAsync, updateCartItemsAsync, setCartStatus } from "../../redux/reducers/cartsSlice";
import formatToCurrency from "../../utils/formatToCurrency";
import { gridItemComponentStyles } from '../../styles/componentStyles';

function GridItem({ _id, tags, image_url, name, price, status }) {
    const { carts = [] } = useSelector(selectCarts);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);

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

    const onAddToLocalStoreTemp = () => {
        const productIds = carts.map((cart) => cart.product._id);
        const existingItems = carts.map((cart) => {
            if (cart.product._id === _id) {
                return {
                    product: {
                        _id: cart.product._id,
                        image_url: cart.product.image_url,
                        name: cart.product.name,
                        price: cart.product.price
                    },
                    qty: cart.qty + 1
                }
            } else {
                return {
                    product: {
                        _id: cart.product._id,
                        image_url: cart.product.image_url,
                        name: cart.product.name,
                        price: cart.product.price
                    },
                    qty: cart.qty
                }
            }
        });

        const newItem = {
            product: {
                _id,
                image_url,
                name,
                price
            },
            qty: 1
        }

        if (productIds?.includes(_id)) {
            dispatch(updateCartItemsAsync({ items: existingItems }));
            dispatch(setCartStatus({ status: 'success', info: `Menambah kuantitas ${name} di keranjang` }));
            
            setTimeout(() => dispatch(setCartStatus({ status: '', info: '' })), 3000);
        } else {
            const items = [...existingItems, newItem];
            dispatch(updateCartItemsAsync({ items }));
            dispatch(setCartStatus({ status: 'success', info: `Menambahkan ${name} ke keranjang` }));
            setTimeout(() => dispatch(setCartStatus({ status: '', info: '' })), 3000);
        }

        setTimeout(() => dispatch(getCartsAsync()), 300);
    };

    return (
        loading

            ?

            <Box sx={gridItemComponentStyles.boxContainer}>

                <Skeleton animation='wave' variant='circular' sx={{ height: { xs: '117px', sm: '140px' }, width: { xs: '117px', sm: '140px' }, position: 'absolute', right: 0, top: { xs: '-50px', sm: '-70px' } }} />

                <Stack useFlexGap gap={{ xs: '38px' }}>
                    <Stack useFlexGap gap={{ xs: '25px' }} sx={gridItemComponentStyles.contentContainer}>
                        <Skeleton animation='wave' variant='rounded' width={'62px'} height={'28px'} sx={{ borderRadius: '30px' }} />
                        <Stack useFlexGap gap={{ xs: '2px' }}>
                            <Skeleton animation='wave' height={'36px'} />
                            <Skeleton animation='wave' height={'24px'} />
                        </Stack>
                    </Stack>

                    <Stack alignItems={'center'} sx={gridItemComponentStyles.iconContainer}>
                        <AddShoppingCartRoundedIcon />
                    </Stack>
                </Stack>
            </Box>

            :

            <Box sx={gridItemComponentStyles.boxContainer}>
                {
                    status === 'loading'
                        ?
                        <Skeleton animation='wave' variant='circular' sx={{ height: { xs: '117px', sm: '140px' }, width: { xs: '117px', sm: '140px' }, position: 'absolute', right: 0, top: { xs: '-50px', sm: '-70px' } }} />
                        :
                        <Image type='grid-item-image' src={image_url} />
                }

                <Stack useFlexGap gap={{ xs: '38px' }}>
                    <Stack useFlexGap gap={{ xs: '25px' }} sx={gridItemComponentStyles.contentContainer}>
                        {
                            status === 'loading'
                                ?
                                <Skeleton animation='wave' variant='rounded' width={'62px'} height={'28px'} sx={{ borderRadius: '30px' }} />
                                :
                                <Typography sx={gridItemComponentStyles.tags}>
                                    {tags}
                                </Typography>
                        }
                        <Stack useFlexGap gap={{ xs: '2px' }}>
                            {
                                status === 'loading'
                                    ?
                                    <Skeleton animation='wave' height={'36px'} />
                                    :
                                    <CustomTooltip
                                        arrow
                                        main='true'
                                        title={name}
                                        placement="bottom-end"
                                        TransitionComponent={Zoom}
                                        open={show}
                                        onOpen={onHoverOpen}
                                        onClose={onHoverClose}
                                        onClick={onClickToggleOpen}
                                    >
                                        <Typography sx={gridItemComponentStyles.tagName}>
                                            {name}
                                        </Typography>
                                    </CustomTooltip>
                            }

                            {
                                status === 'loading'
                                    ?
                                    <Skeleton animation='wave' height={'24px'} />
                                    :
                                    <Typography sx={gridItemComponentStyles.price}>
                                        {formatToCurrency(price)}
                                    </Typography>
                            }
                        </Stack>
                    </Stack>

                    <Stack alignItems={'center'} sx={gridItemComponentStyles.iconContainer} onClick={onAddToLocalStoreTemp}>
                        <AddShoppingCartRoundedIcon />
                    </Stack>
                </Stack>
            </Box>
    );
}

export default GridItem;