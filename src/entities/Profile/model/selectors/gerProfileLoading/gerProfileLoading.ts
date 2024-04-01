import { StateShema } from 'app/providers/StoreProvider';

export const getProfileLoading = (state: StateShema) => state?.profile?.isLoading || false;