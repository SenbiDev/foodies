import { styled } from "@mui/material";

const ProductImage = styled('img')(({ theme }) => ({
    objectFit: 'cover',
    height: '89px',
    width: '135px',
    borderRadius: '16px',
    border: '4px solid orange',
    [theme.breakpoints.up('sm')]: {
        height: '106px',
        width: '160px',
    },
    [theme.breakpoints.up('md')]: {
        height: '85px',
        width: '128px',
    },
    [theme.breakpoints.up('lg')]: {
        height: '137px',
        width: '207px',
    },
    [theme.breakpoints.up('xl')]: {
        height: '162px',
        width: '244px',
    },
}));

export default ProductImage;