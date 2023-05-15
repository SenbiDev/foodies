import { styled } from "@mui/material";

const FooterBrand = styled('img')(({ theme }) => ({
    height: '24px',
    width: '69px',
    [theme.breakpoints.up('md')]: {
        height: '27px',
        width: '78px',
    },
    [theme.breakpoints.up('lg')]: {
        height: '30px',
        width: '86px',
    },
    [theme.breakpoints.up('xl')]: {
        height: '36px',
        width: '104px',
    },
}));

export default FooterBrand;