import { StateShema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsLoading = (state: StateShema) => {
    return state.articleDetailsPage?.recommendations?.isLoading;
};

export const getArticleRecommendationsError = (state: StateShema) => {
    return state.articleDetailsPage?.recommendations?.error;
};
    