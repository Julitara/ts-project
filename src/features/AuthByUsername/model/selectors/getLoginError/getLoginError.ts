import { StateShema } from 'app/providers/StoreProvider';

export const getLoginError = (state: StateShema) => {
    return state?.loginForm?.error || undefined;
};