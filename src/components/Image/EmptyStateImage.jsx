import { styled } from "@mui/material";

const EmptyStateImage = styled('img')(({ theme }) => ({
    paddingTop: '25px',
    height: `${562 - 420}px`,
    [theme.breakpoints.up('sm')]: {
        height: `${562 - 380}px`,
    },
    [theme.breakpoints.up('md')]: {
        height: `${562 - 340}px`,
    }
}));

export default EmptyStateImage;