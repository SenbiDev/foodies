import { styled } from "@mui/material";

const HeaderBrand = styled('img')(({ theme }) => ({
    height: '36px',
    width: '104px',
    [theme.breakpoints.up('md')]: {
        height: '39px',
        width: '112px',
    },
    [theme.breakpoints.up('lg')]: {
        height: '42px',
        width: '121px',
    },
    [theme.breakpoints.up('xl')]: {
        height: '48px',
        width: '138px',
    },
}));

export default HeaderBrand;