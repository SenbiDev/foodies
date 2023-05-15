import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Box, Stack, Typography, Pagination, Grid } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { TextField, Chip, GridItem, Snackbar, Image } from '../../components';
import { selectAuth, setUserStatus } from '../../redux/reducers/authSlice';
import { selectProudcts, getProductsAsync, updateCurrentPage } from '../../redux/reducers/productsSlice';
import { selectCategories } from '../../redux/reducers/categoriesSlice';
import { selectTags, getTagsAsync, setTagsQueryParam } from '../../redux/reducers/tagsSlice';
import { selectCarts } from '../../redux/reducers/cartsSlice';
import { deleteOrderItem, deleteOrderId } from '../../redux/reducers/orderItemSlice';
import { mainPageStyles } from '../../styles/pageStyles';

function Main() {
    const { userStatus } = useSelector(selectAuth);
    const { products = [], totalPages = 10, currentPage = 1, status: loadingProducts } = useSelector(selectProudcts);
    const { tags, tagsQueryParam = [] } = useSelector(selectTags);
    const { categorySelected } = useSelector(selectCategories);
    const { cartStatus } = useSelector(selectCarts);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [keyword, setKeyword] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (userStatus !== 'logout') {
            dispatch(setUserStatus('logged'));
        }
        dispatch(getProductsAsync({ query, page: currentPage, category: categorySelected, tags: tagsQueryParam.join('') }));
        dispatch(getTagsAsync());
        dispatch(deleteOrderItem());
        dispatch(deleteOrderId());
        setTimeout(() => setLoading(false), 1000);
    }, [dispatch, query, currentPage, categorySelected, tagsQueryParam, userStatus]);

    const onKeywordChange = (value) => {
        setKeyword(value)
    }

    const onSearch = () => {
        setQuery(keyword);
        dispatch(updateCurrentPage(1));
        window.scrollTo(0, 400);
    };

    const onChipSelected = (value) => {
        let newTags = [];
        if (tagsQueryParam.includes(value)) {
            newTags = tagsQueryParam.filter((tag) => tag !== value);
            dispatch(setTagsQueryParam(newTags));
        } else {
            newTags = [...tagsQueryParam, value];
            dispatch(setTagsQueryParam(newTags));
        }
        dispatch(updateCurrentPage(1));
    };

    const onPagination = (event, value) => {
        dispatch(updateCurrentPage(value));
        window.scrollTo(0, 400);
    }

    if (userStatus === 'logout') {
        return null;
    }

    return (
        <>
            <Box sx={mainPageStyles.boxContainer}>
                <Box sx={mainPageStyles.boxFormContainer}>
                    <Stack useFlexGap gap={'20px'}>

                        <TextField size='medium' onKeywordChange={onKeywordChange} onSearch={onSearch} />

                        {
                            products.length !== 0 &&
                            <Stack useFlexGap gap={'14px'}>
                                <Typography sx={mainPageStyles.boxFormContent}>Tags</Typography>
                                <Stack direction={'row'} flexWrap={'wrap'} useFlexGap gap={'10px'}>
                                    {
                                        tags.map(({ name }, index) => {
                                            if (categorySelected === 'Minuman') {
                                                if (['Kopi', 'Teh'].includes(name)) {
                                                    return (<Chip key={index} label={name} onChipSelected={onChipSelected} />)
                                                }
                                            } else if (categorySelected === 'Makanan') {
                                                if (!['Kopi', 'Teh'].includes(name)) {
                                                    return (<Chip key={index} label={name} onChipSelected={onChipSelected} />)
                                                }
                                            } else {
                                                return (<Chip key={index} label={name} onChipSelected={onChipSelected} />)
                                            }
                                        })
                                    }
                                </Stack>
                            </Stack>
                        }

                    </Stack>
                </Box>
                
                {
                    products.length === 0 && loading === false
                    ?
                    <Stack alignItems={'center'} useFlexGap gap={'40px'} sx={mainPageStyles.emptyStateContainer}>
                        <Image type='empty-state-image' src="./images/empty-state.png" />
                        <Typography sx={mainPageStyles.emptyStateContent}>
                            Produk tidak ditemukan
                        </Typography>
                    </Stack>
                    :
                    <Grid
                        container
                        columnSpacing={{ xs: '20px', md: '104px', lg: '50px', xl: '148px' }}
                        rowSpacing={'120px'}
                        justifyContent={'center'}
                        sx={mainPageStyles.gridContainer}
                    >
                        {products.map(({ _id, tags, image_url, name, price }, index) => (
                            <Grid
                                key={index}
                                item
                            >
                                <GridItem _id={_id} tags={tags[0].name} image_url={image_url} name={name} price={price} status={loadingProducts} />
                            </Grid>
                        ))}
                    </Grid>
                }

                {
                    products.length !== 0 &&
                    <Pagination size='large' count={totalPages} page={currentPage} onChange={onPagination} sx={mainPageStyles.pagination} />
                }
            </Box>
            
            <Snackbar
                open={cartStatus?.status === 'success'}
                backgroundColor={'orange'}
                icon={<CheckRoundedIcon sx={{ color: 'white', fontSize: { lg: '30px' } }} />}
                message={cartStatus?.info}
            />
        </>
    )
}

export default Main;