import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import { selectOrderItem, getOrderItem, createOrderAsync, deleteOrderItem } from "../../redux/reducers/orderItemSlice";
import { backwardFordwardComponentStyles } from '../../styles/componentStyles';

function BackwardFordward({ to }) {
    const { orderItem } = useSelector(selectOrderItem);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getOrderItem());
    }, [dispatch])

    const onMove = () => {
        if (to === '/invoice') {
            dispatch(createOrderAsync({ delivery_fee: 20000, delivery_address: orderItem?._id }));
            setTimeout(() => dispatch(deleteOrderItem()), 1000);
        }
    };

    return (
        <Stack direction={'row'} justifyContent={'space-between'} sx={backwardFordwardComponentStyles.container}>
            <Button sx={backwardFordwardComponentStyles.backButton} onClick={() => navigate(-1)}>Kembali</Button>
            <RouterLink to={to} onClick={onMove} style={{ textDecoration: 'none' }}>
                <Button variant='contained' sx={backwardFordwardComponentStyles.nextButton}>Selanjutnya</Button>
            </RouterLink>
        </Stack>
    );
}

export default BackwardFordward;