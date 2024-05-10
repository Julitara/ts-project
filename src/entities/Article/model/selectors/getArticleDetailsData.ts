import { StateShema } from 'app/providers/StoreProvider';

export const getArticleDetailsData = (state: StateShema) => 
    state?.articleDetails?.data || undefined;
export const getArticleDetailsLoading = (state: StateShema) => state?.articleDetails?.isLoading;
export const getArticleDetailsError = (state: StateShema) => state?.articleDetails?.error;