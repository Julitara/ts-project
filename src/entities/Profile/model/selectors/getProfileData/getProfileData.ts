import { StateShema } from 'app/providers/StoreProvider';

export const getProfileData = (state: StateShema) => state?.profile?.form || undefined;