import { StateShema } from 'app/providers/StoreProvider';

export const getLoginPassword = (state: StateShema) => {
    return state?.loginForm?.password || '';
};