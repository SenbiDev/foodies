import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getInvoiceById } from '../../api'

const initialState = {
    invoice: {},
    orderNumber: 0,
    status: 'loading'
};

export const getInvoiceByIdAsync = createAsyncThunk(
    'getInvoiceById',
    async ({ order_id }) => {
       const invoice = await getInvoiceById({ order_id });
       const orderNumber = invoice.order[0].order_number;
       return { invoice, orderNumber };
    }
);

const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getInvoiceByIdAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getInvoiceByIdAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.invoice = action.payload.invoice;
                state.orderNumber = action.payload.orderNumber
            })
            .addCase(getInvoiceByIdAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const selectInvoice = (state) => state.invoice;

export default invoiceSlice.reducer;