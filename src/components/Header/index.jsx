import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
    Stack,
    Box,
    Link,
    Button,
    Badge,
    Grow,
    IconButton,
    Typography,
    Skeleton,
    Backdrop,
    Divider,
} from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Image, LoginForm, SignUpForm } from '../../components';
import { updateCurrentPage } from "../../redux/reducers/productsSlice";
import { selectCategories, getCategoriesAsync, updateCategories, updateCategorySelected } from "../../redux/reducers/categoriesSlice";
import { setTagsQueryParam } from "../../redux/reducers/tagsSlice";
import { selectCarts, getCartsAsync } from "../../redux/reducers/cartsSlice";
import { selectAuth } from "../../redux/reducers/authSlice";
import useIsUserAuthorized from "../../hooks/useIsUserAthorized";
import useWidth from "../../hooks/useWidth";
import { headerComponentStyles } from '../../styles/componentStyles';

function Header() {
    const { userStatus } = useSelector(selectAuth);
    const { categories } = useSelector(selectCategories);
    const { carts = [] } = useSelector(selectCarts);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [showNavigationMenu, setShowNavigationMenu] = useState(false);
    const [loading, setLoading] = useState(true);
    const breakpoints = useWidth();
    const isUserAuthorized = useIsUserAuthorized();
    const location = useLocation();
    const currentPath = location.pathname;

    const [showLoginDialog, setShowLoginDialog] = useState(false);
    const onShowLoginDialog = () => {
        setShowLoginDialog(true);
        setShowNavigationMenu(false);
    };

    const [showSignUpDialog, setShowSignUpDialog] = useState(false);
    const onShowSignUpDialog = () => {
        setShowSignUpDialog(true);
        setShowNavigationMenu(false);
    };

    useEffect(() => {
        dispatch(getCategoriesAsync());
        dispatch(getCartsAsync());
        setLoading(false);
    }, [dispatch]);

    const onCategorySelected = ({ _id, name }) => {
        const changeCategoryState = categories.map((category) => {
            if (category._id === _id) {
                return { ...category, color: 'orange' };
            } else {
                return { ...category, color: 'black' };
            }
        });

        dispatch(updateCategories(changeCategoryState));
        dispatch(updateCategorySelected(name === 'Default' ? '' : name));
        dispatch(setTagsQueryParam([]));
        dispatch(updateCurrentPage(1));
        window.scrollTo(0, 400);
        setShow(false);
    };

    const onHideLoginDialog = () => {
        setShowLoginDialog(false);
    };

    const onHideSignUpDialog = () => {
        setShowSignUpDialog(false);
    };

    if (userStatus === 'logout') {
        return null;
    }

    return (
        loading === false && <>
            <Stack direction={'row'} alignItems={{ xs: 'flex-start', md: 'center' }} useFlexGap gap={'42px'} justifyContent={'space-between'} sx={headerComponentStyles.headerContainer}>
                <RouterLink to={'/'}>
                    <Image type='header-brand' src='./images/brand.png' />
                </RouterLink>

                {
                    isUserAuthorized
                        ?
                        <>
                            <Stack direction={'row'} flexWrap={'wrap'} useFlexGap gap={{ xs: '26px', sm: '36px', md: '70px' }} justifyContent={'flex-end'}>
                                {
                                    currentPath === '/' &&
                                    <>
                                        <Stack>
                                            <Box id='box-category' sx={headerComponentStyles.boxCategory}>
                                                <IconButton sx={headerComponentStyles.iconButton} onClick={() => setShow(!show)}>
                                                    <FilterListRoundedIcon sx={headerComponentStyles.icon} />
                                                </IconButton>
                                                <Grow in={show}>
                                                    <Stack id='category-dialog' useFlexGap gap={'20px'} sx={headerComponentStyles.categoryDialog}>
                                                        <Typography sx={headerComponentStyles.categoryDialogContent}>
                                                            Kategori
                                                        </Typography>

                                                        <Stack useFlexGap gap={'8px'} sx={headerComponentStyles.categoryListContainer}>
                                                            {
                                                                loading
                                                                    ?
                                                                    <>
                                                                        <Skeleton />
                                                                        <Skeleton />
                                                                        <Skeleton />
                                                                    </>
                                                                    :
                                                                    categories.map(({ _id, name, color }, index) =>
                                                                        <Button key={index} sx={headerComponentStyles.categoryButton(color)} onClick={() => onCategorySelected({ _id, name })}>
                                                                            {name}
                                                                        </Button>
                                                                    )
                                                            }
                                                        </Stack>
                                                    </Stack>

                                                </Grow>
                                            </Box>
                                        </Stack>

                                        <Stack>
                                            <RouterLink to={'/cart'}>
                                                <IconButton sx={headerComponentStyles.iconButton}>
                                                    <Badge badgeContent={carts.length} sx={headerComponentStyles.badge}>
                                                        <ShoppingCartRoundedIcon sx={headerComponentStyles.icon} />
                                                    </Badge>
                                                </IconButton>
                                            </RouterLink>
                                        </Stack>
                                    </>
                                }

                                <Stack>
                                    <RouterLink to={'/account'}>
                                        <IconButton sx={headerComponentStyles.iconButton}>
                                            <AccountCircleRoundedIcon sx={headerComponentStyles.icon} />
                                        </IconButton>
                                    </RouterLink>
                                </Stack>

                            </Stack>
                        </>
                        :
                        <>
                            {
                                ['xs', 'sm'].includes(breakpoints) &&
                                <Box sx={{ position: 'relative' }}>
                                    <IconButton sx={headerComponentStyles.iconButton} onClick={() => setShowNavigationMenu(!showNavigationMenu)}>
                                        <MenuRoundedIcon sx={headerComponentStyles.icon} />
                                    </IconButton>

                                    <Grow in={showNavigationMenu}>
                                        <Stack sx={headerComponentStyles.navigationMenuDialog}>
                                            <Stack useFlexGap gap={'10px'} sx={headerComponentStyles.linkContainerXS}>
                                                <Link underline="none" sx={headerComponentStyles.linkXS} >Home</Link>
                                                <Link underline="none" sx={headerComponentStyles.linkXS} >Tentang Kami</Link>
                                                <Link underline="none" sx={headerComponentStyles.linkXS} >Kontak Kami</Link>
                                            </Stack>


                                            <Divider />

                                            <Stack direction={'row'} justifyContent={'space-between'} sx={headerComponentStyles.buttonContainerXS}>
                                                <Button sx={headerComponentStyles.loginButtonXS} onClick={onShowLoginDialog}>
                                                    Login
                                                </Button>
                                                <Button sx={headerComponentStyles.signUpButtonXS} onClick={onShowSignUpDialog}>
                                                    Sign Up
                                                </Button>
                                            </Stack>
                                        </Stack>
                                    </Grow>
                                </Box>
                            }
                            {
                                ['md', 'lg', 'xl'].includes(breakpoints) &&
                                <Stack direction={'row'} alignItems='center' useFlexGap gap={{ md: '40px' }}>
                                    <Stack direction={'row'} useFlexGap gap={{ md: '20px', lg: '30px', xl: '60px' }}>
                                        <Link underline="none" sx={headerComponentStyles.linkMD} >Home</Link>
                                        <Link underline="none" sx={headerComponentStyles.linkMD} >Tentang Kami</Link>
                                        <Link underline="none" sx={headerComponentStyles.linkMD} >Kontak Kami</Link>
                                    </Stack>
                                    <Stack direction={'row'} alignItems={'center'} useFlexGap gap={{ md: '20px', lg: '30px' }}>
                                        <Button variant='contained' sx={headerComponentStyles.loginButtonMD} onClick={onShowLoginDialog}>
                                            Login
                                        </Button>
                                        <Button variant='contained' sx={headerComponentStyles.signUpButtonMD} onClick={onShowSignUpDialog}>
                                            Sign Up
                                        </Button>
                                    </Stack>
                                </Stack>
                            }
                        </>
                }

            </Stack>
            <Backdrop
                sx={headerComponentStyles.backdrop}
                open={showLoginDialog}
            >
                <LoginForm onHideLoginDialog={onHideLoginDialog} />
            </Backdrop>
            <Backdrop
                sx={headerComponentStyles.backdrop}
                open={showSignUpDialog}
            >
                <SignUpForm onHideSignUpDialog={onHideSignUpDialog} />
            </Backdrop>
        </>
    )
}

export default Header;