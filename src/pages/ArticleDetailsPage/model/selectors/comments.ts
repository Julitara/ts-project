import { StateShema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateShema) => {
    return state.articleDetailsPage?.comments?.isLoading;
};
    

export const getArticleCommentsError = (state: StateShema) => {
    return state.articleDetailsPage?.recommendations?.error;
};