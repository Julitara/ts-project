import { StateShema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageLoading = (state: StateShema) => 
    state.articlesPage?.isLoading;

export const getArticlesPageError = (state: StateShema) => 
    state.articlesPage?.error;

export const getArticlesPageView = (state: StateShema) => 
    state.articlesPage?.view || ArticleView.SMALL;

export const getArticlesPageNum = (state: StateShema) => 
    state.articlesPage?.page || 1;

export const getArticlesPageLimit = (state: StateShema) => 
    state.articlesPage?.limit || 9;

export const getArticlesPageHasMore = (state: StateShema) => 
    state.articlesPage?.hasMore;

export const getArticlesPageInited = (state: StateShema) => 
    state.articlesPage?._inited;