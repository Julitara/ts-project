import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AddCommentFormShema } from '../types/AddCommentForm';

const initialState: AddCommentFormShema = {
    text: undefined,
    error: undefined
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentFormSlice',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    }
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;