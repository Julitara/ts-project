import { StateShema } from 'app/providers/StoreProvider';

export const getProfileForm = (state: StateShema) => state?.profile?.form || undefined;