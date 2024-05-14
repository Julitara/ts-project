import { StateShema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateShema) => 
    state.articleDetailsComments?.isLoading;

export const getArticleCommentsError = (state: StateShema) => 
    state.articleDetailsComments?.error;