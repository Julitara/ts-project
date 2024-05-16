import { StateShema } from 'app/providers/StoreProvider';

export const getAddCommentFormText = (state: StateShema) => {
    return state?.addCommentForm?.text;
};

export const getAddCommentFormError = (state: StateShema) => {
    return state?.addCommentForm?.error;
};