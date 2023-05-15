import { styled } from "@mui/material";

const FoodItemImage = styled('img')(({ theme }) => ({
    objectFit: 'cover',
    height: '106px',
    width: '106px',
    borderRadius: '100%',
    border: '4px solid orange',
    boxSizing: 'border-box',
    position: 'absolute',
    left: '-50px',
    top: '36px',
    [theme.breakpoints.up('sm')]: {
        height: '152px',
        width: '152px',
        left: '-80px',
        top: '18px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '220px',
      width: '220px',
      left: '-100px',
      top: '12px',
    }
}));

export default FoodItemImage;