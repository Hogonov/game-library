import { gameSlice } from './gameSlice';
import { platformSlice } from './platformSlice';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ gameSlice, platformSlice });