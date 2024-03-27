import { StateShema } from 'app/providers/StoreProvider';

export const getLoginState = (state: StateShema) => {
    return state?.loginForm;
};