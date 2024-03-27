import { StateShema } from 'app/providers/StoreProvider';

export const getLoginUsername = (state: StateShema) => {
    return state?.loginForm?.username || '';
};