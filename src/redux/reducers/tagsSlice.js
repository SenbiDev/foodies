import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from '../../api'

const initialState = {
    tags: [],
    tagsQueryParam: [],
    status: 'loading'
};

export const getTagsAsync = createAsyncThunk(
    'getTags',
    async () => {
        const tags = await getTags();
        return tags;
    }
);

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        setTagsQueryParam: (state, action) => {
            state.tagsQueryParam = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTagsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTagsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.tags = action.payload;
            })
            .addCase(getTagsAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { setTagsQueryParam } = tagsSlice.actions;

export const selectTags = (state) => state.tags;

export default tagsSlice.reducer;