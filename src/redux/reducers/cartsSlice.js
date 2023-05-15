import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCarts, updateCartItems } from '../../api'

const initialState = {
    carts: [],
    items: [],
    cartStatus: { status: '', info: '' },
    status: 'loading'
};

export const getCartsAsync = createAsyncThunk(
    'getCarts',
    async () => {
        const carts = await getCarts();
        return carts;
    }
);

export const updateCartItemsAsync = createAsyncThunk(
    'updateCartItems',
    async ({ items }) => {
        await updateCartItems({ items });
    }
);

export const updateItemsAsync = createAsyncThunk(
    'updateItems',
    async (items) => {
        return items 
    }
);

const cartsSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        setCartStatus: (state, action) => {
            state.cartStatus = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCartsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCartsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.carts = action.payload;
            })
            .addCase(getCartsAsync.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(updateCartItemsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateCartItemsAsync.fulfilled, (state) => {
                state.status = 'idle';
            })
            .addCase(updateCartItemsAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { setCartStatus } =  cartsSlice.actions;

export const selectCarts = (state) => state.carts;

export default cartsSlice.reducer;