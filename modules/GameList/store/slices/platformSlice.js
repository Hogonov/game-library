import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper'

const initialState = {
    platformsList: [],
    error: null,
    loading: false,
};

const name = 'platform';

export const platformSlice = createSlice({
    name,
    initialState,
    reducers: {
        fetchingPlatform: (state) => {
            state.loading = true;
        },
        fetchPlatformSuccess: (state, action) => {
            state.loading = false;
            state.error = '';
            state.platformsList = action.payload;
        },
        fetchPlatformError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {...state, ...action.payload[name]};
        },
    },
});

export const {
    fetchPlatformSuccess,
    fetchingPlatform,
    fetchPlatformError,
} = platformSlice.actions;

export default platformSlice.reducer;