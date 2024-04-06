import { StateShema } from 'app/providers/StoreProvider';

export const getProfileReadonly = (state: StateShema) => state?.profile?.readonly;