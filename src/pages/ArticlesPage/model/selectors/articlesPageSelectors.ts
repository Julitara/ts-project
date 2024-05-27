import { StateShema } from 'app/providers/StoreProvider';

export const getArticlesPageLoading = (state: StateShema) => 
    state.articlesPage?.isLoading;

export const getArticlesPageError = (state: StateShema) => 
    state.articlesPage?.error;

export const getArticlesPageView = (state: StateShema) => 
    state.articlesPage?.view;