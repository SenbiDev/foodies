import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from '../../api'

const initialState = {
    categories: [],
    categorySelected: '',
    status: 'loading'
};

export const getCategoriesAsync = createAsyncThunk(
    'getCategories',
    async () => {
        let categories = await getCategories();
        categories.unshift({ _id: '644f37af14ae02ff6e6bxxxx', name: 'Default', __v: 0 });
        categories = categories.map((category) => category.name === 'Default' ? ({...category, color: 'orange'}) : ({...category, color: 'black'}))
        return categories;
    }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        updateCategories: (state, action) => {
            state.categories = action.payload;
        },
        updateCategorySelected: (state, action) => {
            state.categorySelected = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategoriesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCategoriesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.categories = action.payload;
            })
            .addCase(getCategoriesAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { updateCategories, updateCategorySelected } = categoriesSlice.actions;

export const selectCategories = (state) => state.categories;

export default categoriesSlice.reducer;