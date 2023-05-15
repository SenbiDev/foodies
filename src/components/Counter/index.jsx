import { useState } from "react";
import { useDispatch } from "react-redux";
import { Stack, IconButton, Typography } from "@mui/material";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { getCartsAsync, updateCartItemsAsync } from "../../redux/reducers/cartsSlice";
import { counterComponentStyles } from '../../styles/componentStyles';

function Counter({ carts = [], _id, quantity }) {
    const dispatch = useDispatch();
    const [counter, setCounter] = useState(quantity);
  
    const onDecrement = () => {
        setCounter((oldState) => {
          if (oldState < 2) { 
            setTimeout(() => dispatch(getCartsAsync()), 300);
            return 1 
          }
          const newState = oldState - 1;
          const newCartsState = carts.map((cart) => cart._id === _id ? ({...cart, qty: newState}) : cart);
          dispatch(updateCartItemsAsync({ items: newCartsState }));
          setTimeout(() => dispatch(getCartsAsync()), 300);
          return newState;
        });
    };
  
    const onIncrement = () => {
        setCounter((oldState) => {
          const newState = oldState + 1;
          const newCartsState = carts.map((cart) => cart._id === _id ? ({...cart, qty: newState}) : cart);
          dispatch(updateCartItemsAsync({ items: newCartsState }));
          setTimeout(() => dispatch(getCartsAsync()), 300);
          return newState;
        });
    };
  
    return (
        <Stack direction={'row'} useFlexGap gap={{ xs: '14px' }} justifyContent={{ md: 'flex-end' }}>
            <IconButton sx={counterComponentStyles.iconButton} onClick={onDecrement}>
                <RemoveRoundedIcon sx={counterComponentStyles.icon} />
            </IconButton>
            <Typography>
                {counter}
            </Typography>
            <IconButton sx={counterComponentStyles.iconButton} onClick={onIncrement}>
                <AddRoundedIcon sx={counterComponentStyles.icon} />
            </IconButton>
        </Stack>
    );
  }

export default Counter;