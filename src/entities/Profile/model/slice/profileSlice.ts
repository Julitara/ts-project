import { createSlice } from '@reduxjs/toolkit';
import { ProfileShema } from '../types/profile';

const initialState: ProfileShema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data:undefined
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;