import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ScrollSaveShema } from '../types/scrollSaveShema';

const initialState: ScrollSaveShema = {
    scroll: {}
};

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (
            state, 
            {payload}: PayloadAction<{path: string; position: number}>
        ) => {
            state.scroll[payload.path] = payload.position;
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUsername.fulfilled, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUsername.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;