import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsData = (state: StateSchema) => 
    state?.articleDetails?.data || undefined;
export const getArticleDetailsLoading = (state: StateSchema) => state?.articleDetails?.isLoading;
export const getArticleDetailsError = (state: StateSchema) => state?.articleDetails?.error;