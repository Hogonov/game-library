import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper'

const initialState = {
    games: [],
    error: null,
    loading: false,
    currentPage: 1,
    limit: 25,
    totalGames: 0,
    totalPages: 0,
};

const name = 'game';

export const gameSlice = createSlice({
    name,
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setTotalGames: (state, action) => {
            state.totalGames = action.payload;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        fetchingGame: (state) => {
            state.loading = true;
        },
        fetchGameSuccess: (state, action) => {
            state.loading = false;
            state.error = '';
            state.games = action.payload;
        },
        fetchGameError: (state, action) => {
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
    fetchGameSuccess,
    fetchingGame,
    fetchGameError,
    setPage,
    setTotalGames,
    setTotalPages,
    setLimit,
} = gameSlice.actions;

export default gameSlice.reducer;