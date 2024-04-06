import { StateShema } from 'app/providers/StoreProvider';

export const getProfileError = (state: StateShema) => state?.profile?.error || '';