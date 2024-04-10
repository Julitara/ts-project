import { Country } from 'entities/Country';
import { ProfileShema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    username: 'admin',
    age: 22,
    country: Country.USA,
    firstname: 'Julia',
    lastname: 'Tarasova',
    city: 'New York',
    currency: Currency.USD
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileShema> = {readonly: false};

        expect(profileReducer(
            state as ProfileShema, 
            profileActions.setReadonly(true))).toEqual({readonly: true});
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileShema> = {data, form: {username: ''}};

        expect(profileReducer(
            state as ProfileShema, 
            profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                validateErrors: undefined,
                data,
                form: data
                
            });
    });

    test('test update data', () => {
        const state: DeepPartial<ProfileShema> = {form: {firstname: '111'}};

        expect(profileReducer(
            state as ProfileShema, 
            profileActions.updateProfile({firstname: '123'})))
            .toEqual({
                form: {firstname: '123'}
            });
    });

    test('test update data service pending', () => {
        const state: DeepPartial<ProfileShema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        };

        expect(profileReducer(state as ProfileShema, updateProfileData.pending))
            .toEqual({
                isLoading: true,
                validateErrors: undefined
            });
    });

    test('test update data service fulfilled', () => {
        const state: DeepPartial<ProfileShema> = {
            isLoading: true,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        };

        expect(profileReducer(state as ProfileShema, updateProfileData.fulfilled(data, '')))
            .toEqual({
                isLoading: false,
                validateErrors: undefined,
                readonly: true,
                form: data,
                data,
            });
    });
});