import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    getOrderList,
    createOrder,
    getOrderItemTemp,
    putOrderItemTemp,
    deleteOrderItemTemp,
    getOrderIdTemp,
    putOrderIdTemp,
    deleteOrderIdTemp
} from '../../api'

const initialState = {
    orders: [],
    orderItem: {},
    orderId: getOrderIdTemp() ?? '',
    status: 'loading'
};

export const getOrderListAsync = createAsyncThunk(
    'getOrderList',
    async () => {
       const orders = await getOrderList();

       return orders;
    }
);

export const createOrderAsync = createAsyncThunk(
    'createOrder',
    async ({ delivery_fee, delivery_address }) => {
       const orderId = await createOrder({ delivery_fee, delivery_address });
       return orderId;
    }
);

const orderItemSlice = createSlice({
    name: 'orderItem',
    initialState,
    reducers: {
        getOrderItem: (state) => {
            state.orderItem = getOrderItemTemp();
        },
        putOrderItem: (state, action) => {
            putOrderItemTemp({});
            state.orderItem = action.payload;
            putOrderItemTemp(action.payload);
        },
        deleteOrderItem: (state) => {
            state.orderItem = {};
            deleteOrderItemTemp();
        },
        deleteOrderId: (state) => {
            deleteOrderIdTemp();
            state.orderId = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getOrderListAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getOrderListAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.orders = action.payload;
            })
            .addCase(getOrderListAsync.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(createOrderAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createOrderAsync.fulfilled, (state, action) => {
                putOrderIdTemp(action.payload);
                state.status = 'idle';
                state.orderId = action.payload;
            })
            .addCase(createOrderAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { getOrderItem, putOrderItem, deleteOrderItem, deleteOrderId } = orderItemSlice.actions;

export const selectOrderItem = (state) => state.orderItem;

export default orderItemSlice.reducer;
