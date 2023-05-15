import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Divider, Container, Stack, Typography } from "@mui/material";
import { Image } from '../../components';
import { selectAuth } from "../../redux/reducers/authSlice";
import { footerComponentStyles } from '../../styles/componentStyles';

function Footer() {
    const { userStatus } = useSelector(selectAuth);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    if (userStatus === 'logout' && location.pathname ) {
        return null;
    }

    return (
        loading === false && <>
            <Divider sx={footerComponentStyles.divider} />
            <Container sx={footerComponentStyles.container}>

                <Stack direction={'row'} flexWrap={'wrap'} useFlexGap gap={{ xs: '36px' }} justifyContent={{ sm: 'space-between' }}>
                    <RouterLink to={'/'}>
                        <Image type='footer-brand' src='./images/brand.png' />
                    </RouterLink>

                    <Stack
                        direction={'row'}
                        flexWrap={'wrap'}
                        useFlexGap
                        gap={{ xs: '52px', md: '94px' }}
                        justifyContent={'space-between'}
                        sx={footerComponentStyles.stackContainer}
                    >
                        <Stack useFlexGap gap={{ xs: '16px' }}>
                            <Typography sx={footerComponentStyles.contentParent}>Menu</Typography>
                            <Stack useFlexGap gap={{ xs: '6px' }}>
                                <Typography sx={footerComponentStyles.contentChild}>Utama</Typography>
                                <Typography sx={footerComponentStyles.contentChild}>Makanan</Typography>
                                <Typography sx={footerComponentStyles.contentChild}>Minuman</Typography>
                            </Stack>
                        </Stack>

                        <Stack useFlexGap gap={{ xs: '16px' }}>
                            <Typography sx={footerComponentStyles.contentParent}>Company</Typography>
                            <Stack useFlexGap gap={{ xs: '6px' }}>
                                <Typography sx={footerComponentStyles.contentChild}>Privacy</Typography>
                                <Typography sx={footerComponentStyles.contentChild}>Terms & Condition</Typography>
                                <Typography sx={footerComponentStyles.contentChild}>Policy</Typography>
                            </Stack>
                        </Stack>

                        <Stack useFlexGap gap={{ xs: '16px' }}>
                            <Typography sx={footerComponentStyles.contentParent}>Kontak</Typography>
                            <Stack useFlexGap gap={{ xs: '6px' }}>
                                <Typography sx={footerComponentStyles.contentChild}>0378-7788-3355</Typography>
                                <Typography sx={footerComponentStyles.contentChild}>foodies@gmail.com</Typography>
                                <Typography sx={footerComponentStyles.contentChild}>DI Yograkarta</Typography>
                            </Stack>
                        </Stack>

                    </Stack>

                </Stack>


            </Container>
        </>
    );
}

export default Footer;