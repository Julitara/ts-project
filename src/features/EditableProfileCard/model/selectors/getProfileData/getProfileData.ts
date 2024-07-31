import { StateShema } from 'app/providers/StoreProvider';

export const getProfileData = (state: StateShema) => state?.profile?.data || undefined;

export const getProfileError = (state: StateShema) => state?.profile?.error || '';

export const getProfileForm = (state: StateShema) => state?.profile?.form || undefined;

export const getProfileLoading = (state: StateShema) => state?.profile?.isLoading;

export const getProfileReadonly = (state: StateShema) => state?.profile?.readonly;

export const getProfileValidateErrors = (state: StateShema) => state?.profile?.validateErrors;