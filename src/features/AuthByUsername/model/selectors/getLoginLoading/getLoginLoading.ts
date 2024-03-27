import { StateShema } from 'app/providers/StoreProvider';

export const getLoginLoading = (state: StateShema) => {
    return state?.loginForm?.isLoading || false;
};