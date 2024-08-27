import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginLoading = (state: StateSchema) => {
    return state?.loginForm?.isLoading || false;
};