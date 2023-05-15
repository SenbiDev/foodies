
import { useSelector } from 'react-redux';
import { Stack, Typography, Button, Box } from '@mui/material';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import { InformationCard, FoodItem, Snackbar } from '../../components';
import { selectAuth } from '../../redux/reducers/authSlice';
import { homePageStyles } from '../../styles/pageStyles';

function Home() {
    const { userStatus } = useSelector(selectAuth);
    
    return (
        <>
            <Box sx={homePageStyles.boxContainer}>
                <Stack id='hero-container' direction={'column'} useFlexGap gap={'10px'}>
                    <Stack id='hero-content' useFlexGap gap={'27px'} sx={homePageStyles.heroContent}>
                        <Stack useFlexGap gap={'20px'} sx={{ minWidth: '240px' }}>
                            <Typography sx={homePageStyles.heroContent1}>
                                PESAN MAKANAN HANYA DENGAN BEBERAPA LANGKAH
                            </Typography>

                            <Typography sx={homePageStyles.heroContent2}>
                                Istirihatkan tubuh anda, jelajahi makanan yang anda sukai, degan begitu hari-hari anda penuh dengan semangat!
                            </Typography>
                        </Stack>

                        <Button variant='contained' sx={homePageStyles.heroButton}>
                            Pesan Sekarang
                        </Button>
                    </Stack>

                    <Stack id='pizza-image'></Stack>
                </Stack>

                <Stack alignItems={'center'} sx={homePageStyles.information1}>
                    <Stack direction={{ xs: 'column', md: 'row' }} useFlexGap gap={{ xs: '20px', md: 0 }} justifyContent={{ md: 'space-between' }} sx={homePageStyles.informationCardContainer}>
                        <InformationCard icon={<WatchLaterRoundedIcon sx={homePageStyles.informationIcon} />} centerContent={'07.00 - 21.00'} endContent={'Jam kerja'} />
                        <InformationCard icon={<LocationOnRoundedIcon sx={homePageStyles.informationIcon} />} centerContent={'Jl. Ringroad Utara, Maguwoharjo, Sleman, DI Yogyakarta'} endContent={'Lokasi'} />
                        <InformationCard icon={<CallRoundedIcon sx={homePageStyles.informationIcon} />} centerContent={'0378-7788-3355'} endContent={'Telepon kantor'} />
                    </Stack>
                </Stack>

                <Stack id='food-benefits-container' useFlexGap gap={{ xs: '20px' }} sx={homePageStyles.foodBenefitsContainer}>
                    <Stack id='food-benefits' sx={homePageStyles.foodBenefits} useFlexGap gap={'20px'}>
                        <Typography sx={homePageStyles.foodBenefitsContent1}>
                            Pentingnya makanan bagi tubuh
                        </Typography>
                        <Typography sx={homePageStyles.foodBenefitsContent2}>
                            Asupan nutrisi untuk tubuh bisa didapat dari beragam jenis makanan sehat, tidak terbatas pada satu jenis saja. Bahkan, disarankan untuk mengonsumsi ragam menu untuk menunjang pertumbuhan dan perkembangan tubuh. Mengonsumsi berbagai jenis makanan bisa memberikan nutrisi yang berbeda, sehingga gizi yang diperlukan oleh tubuh bisa terpenuhi
                        </Typography>
                    </Stack>
                    <Box id='pasta-image'></Box>
                </Stack>

                <Stack alignItems={'center'} useFlexGap gap={{ xs: '28px', sm: '56px' }} sx={homePageStyles.information2}>
                    <Typography sx={homePageStyles.information2Content}>
                        Ayo pesan sekarang juga!
                    </Typography>
                    <Stack direction={{ xs: 'column', md: 'row' }} useFlexGap gap={{ xs: '20px', md: 0 }} justifyContent={{ md: 'space-between' }} sx={homePageStyles.informationCardContainer}>
                        <InformationCard icon={<FastfoodRoundedIcon sx={homePageStyles.informationIcon} />} centerContent={'Cari makanan'} endContent={'Jelajahi makanan dengan berbagai kategori yang anda sukai'} />
                        <InformationCard icon={<AddShoppingCartRoundedIcon sx={homePageStyles.informationIcon} />} centerContent={'Tandai makanan yang disukai'} endContent={'Makanan yang terpilih  dimasukkan ke keranjang'} />
                        <InformationCard icon={<LocalShippingRoundedIcon sx={homePageStyles.informationIcon} />} centerContent={'Pengiriman cepat'} endContent={'Jangan khawatir, pesanan anda akan sampai pada tujuan'} />
                    </Stack>
                </Stack>

                <Stack alignItems={'center'} useFlexGap gap={'10px'} sx={homePageStyles.recommendedMenuContainer}>
                    <Typography sx={homePageStyles.recommendedMenuContent1}>
                        Menu Andalan
                    </Typography>
                    <Typography sx={homePageStyles.recommendedMenuContent2}>
                        Terdapat empat menu andalan yang kami tawarkan berikut ini
                    </Typography>
                </Stack>

                <Stack useFlexGap gap={'30px'} sx={homePageStyles.recommendedMenuImagesContainer}>
                    <Stack direction={'row'} flexWrap={'wrap'} useFlexGap gap={'28px'} justifyContent={'space-evenly'}>
                        <FoodItem image={'./images/sushi-nori.jpg'} name={'Sushi Nori'} price={186000} />
                        <FoodItem image={'./images/tempura.jpg'} name={'Tempura'} price={160000} />
                    </Stack>
                    <Stack direction={'row'} flexWrap={'wrap'} useFlexGap gap={'28px'} justifyContent={'space-evenly'}>
                        <FoodItem image={'./images/takoyaki.jpg'} name={'Takoyaki'} price={95500} />
                        <FoodItem image={'./images/udon.jpg'} name={'Udon'} price={100000} />
                    </Stack>
                </Stack>

                <Stack alignItems={'center'} useFlexGap gap={'30px'} sx={homePageStyles.exploreContainer}>
                    <Typography sx={homePageStyles.exploreContent}>
                        Jelajahi juga menu lainnya!
                    </Typography>
                    <Button variant='contained' sx={homePageStyles.exploreButton}>
                        Explore
                        <NavigateNextRoundedIcon />
                    </Button>
                </Stack>
            </Box>

            <Snackbar
                open={userStatus === 'unlogged'}
                backgroundColor={'red'}
                icon={<BlockRoundedIcon sx={{ color: 'white', fontSize: { lg: '30px' } }} />}
                message={'Anda haru login terlebih dahulu!'}
            />
            <Snackbar
                open={userStatus === 'register failed'}
                backgroundColor={'red'}
                icon={<PriorityHighRoundedIcon sx={{ color: 'white', fontSize: { lg: '30px' } }} />}
                message={'User baru gagal dibuat!'}
            />
            <Snackbar
                open={userStatus === 'register success'}
                backgroundColor={'orange'}
                icon={<CheckRoundedIcon sx={{ color: 'white', fontSize: { lg: '30px' } }} />}
                message={'User baru berhasil dibuat!'}
            />
            <Snackbar
                open={userStatus === 'login failed'}
                backgroundColor={'red'}
                icon={<PriorityHighRoundedIcon sx={{ color: 'white', fontSize: { lg: '30px' } }} />}
                message={'Email atau Password salah!'}
            />
            <Snackbar
                open={userStatus === 'logout'}
                backgroundColor={'orange'}
                icon={<CheckRoundedIcon sx={{ color: 'white', fontSize: { lg: '30px' } }} />}
                message={'Logout sukses!'}
            />
        </>
    )
}

export default Home;