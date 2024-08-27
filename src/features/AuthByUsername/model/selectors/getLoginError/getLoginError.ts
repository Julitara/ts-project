import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginError = (state: StateSchema) => {
    return state?.loginForm?.error || undefined;
};