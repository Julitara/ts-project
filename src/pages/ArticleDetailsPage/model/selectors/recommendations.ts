import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations?.isLoading;
};

export const getArticleRecommendationsError = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations?.error;
};
    