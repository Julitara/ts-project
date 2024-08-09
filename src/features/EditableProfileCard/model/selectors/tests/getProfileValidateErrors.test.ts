import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/EditableProfileCardSchema';
import { getProfileValidateErrors } from '../getProfileData/getProfileData';

describe('getProfoleData.test', () => {
    test('should return true', () => {
        const validateErrors = [
            ValidateProfileError.INCORRECT_USER_AGE, 
            ValidateProfileError.INCORRECT_USER_COUNTRY
        ];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors
            }
        };        
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});