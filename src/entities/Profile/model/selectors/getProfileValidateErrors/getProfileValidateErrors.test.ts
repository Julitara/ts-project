import { StateShema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfoleData.test', () => {
    test('should return true', () => {
        const validateErrors = [
            ValidateProfileError.INCORRECT_USER_AGE, 
            ValidateProfileError.INCORRECT_USER_COUNTRY
        ];
        const state: DeepPartial<StateShema> = {
            profile: {
                validateErrors
            }
        };        
        expect(getProfileValidateErrors(state as StateShema)).toEqual(validateErrors);
    });

    test('empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getProfileValidateErrors(state as StateShema)).toEqual(undefined);
    });
});