import { Stack, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { putOrderItem } from "../../redux/reducers/orderItemSlice";
import formatToCurrency from "../../utils/formatToCurrency";
import { cartNavigationComponentStyles } from '../../styles/componentStyles';

function CartNavigation({ priceList = [] }) {
    const dispatch = useDispatch();
    const subtotal = priceList.reduce((subtotal, price) => subtotal + price, 0);

    const onMove = () => {
        dispatch(putOrderItem({ subtotal }));
        window.scrollTo(0, 0);
    };

    return (
        <Stack id='cart-navigation' direction={'row'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'flex-end'} useFlexGap gap={'20px'} sx={cartNavigationComponentStyles.container}>
            <Stack useFlexGap gap={'15px'}>
                <Typography sx={cartNavigationComponentStyles.subtotal}>
                    Subtotal
                </Typography>
                <Typography sx={cartNavigationComponentStyles.price}>
                    {formatToCurrency(subtotal)}
                </Typography>
            </Stack>

            <RouterLink to={'/address'} onClick={onMove} style={{ textDecoration: 'none' }}>
                <Button variant='contained' sx={cartNavigationComponentStyles.nextButton}>
                    Selanjutnya
                </Button>
            </RouterLink>
        </Stack>
    );
}

export default CartNavigation;