import { styled } from "@mui/material";

const GridItemImage = styled('img')(({ theme }) => ({
    objectFit: 'cover',
    height: '117px',
    width: '117px',
    borderRadius: '100%',
    border: '4px solid orange',
    boxSizing: 'border-box',
    position: 'absolute',
    right: 0,
    top: '-50px',
    boxShadow: '1px -2px 6px rgba(0, 0, 0, 0.29)',
    [theme.breakpoints.up('sm')]: {
        height: '140px',
        width: '140px',
        top: '-70px',
    }
}));

export default GridItemImage;