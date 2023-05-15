import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAccessToken, register, login, getUserLogged, logout } from '../../api'

const initialState = {
    token: getAccessToken(),
    me: {},
    userStatus: '',
    status: 'loading'
};

export const userRegisterAsync = createAsyncThunk(
    'register',
    async ({ full_name, email, password }) => {
       const userCreated = await register({ full_name, email, password });
       return userCreated;
    }
);

export const userLoginAsync = createAsyncThunk(
    'login',
    async ({ email, password }) => {
        const token = await login({ email, password });
        return token;
    }
);

export const currentUserAsync = createAsyncThunk(
    'getUserLogged',
    async () => {
        const me = await getUserLogged();
        return me;
    }
);

export const userLogoutAsync = createAsyncThunk(
    'logout',
    async () => {
        await logout();
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserStatus: (state, action) => {
            state.userStatus = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userRegisterAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(userRegisterAsync.fulfilled, (state) => {
                state.status = 'idle';
            })
            .addCase(userRegisterAsync.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(userLoginAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(userLoginAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.token = action.payload;
            })
            .addCase(userLoginAsync.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(currentUserAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(currentUserAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.me = action.payload;
            })
            .addCase(currentUserAsync.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(userLogoutAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(userLogoutAsync.fulfilled, (state) => {
                state.status = 'idle';
                state.token = undefined;
                state.me = {};
            })
            .addCase(userLogoutAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { setUserStatus } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;