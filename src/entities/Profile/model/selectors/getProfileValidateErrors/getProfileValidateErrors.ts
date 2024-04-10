import { StateShema } from 'app/providers/StoreProvider';

export const getProfileValidateErrors = (state: StateShema) => state?.profile?.validateErrors;