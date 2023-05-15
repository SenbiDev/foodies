import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from '../../api'

const initialState = {
    products: [],
    totalPages: 10,
    currentPage: 1,
    status: 'loading'
};

export const getProductsAsync = createAsyncThunk(
    'getProducts',
    async ({ query, page, category, tags }) => {
        const { data, totalPages, currentPage } = await getProducts({ query, page, category, tags });
        return { data, totalPages, currentPage };
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        updateCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProductsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.products = action.payload.data;
                state.totalPages = action.payload.totalPages;
                state.currentPage = action.payload.currentPage;
            })
            .addCase(getProductsAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { updateCurrentPage } = productsSlice.actions;

export const selectProudcts = (state) => state.products;

export default productsSlice.reducer;