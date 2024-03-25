import { StateShema } from 'app/providers/StoreProvider';

export const getUserAuthData = (state: StateShema) => state.user.authData;