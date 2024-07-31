import { Country } from 'entities/Country';
import { profileActions, profileReducer } from './profileSlice';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/EditableProfileCardSchema';

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
        const state: DeepPartial<ProfileSchema> = {readonly: false};

        expect(profileReducer(
            state as ProfileSchema, 
            profileActions.setReadonly(true))).toEqual({readonly: true});
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {data, form: {username: ''}};

        expect(profileReducer(
            state as ProfileSchema, 
            profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                validateErrors: undefined,
                data,
                form: data
                
            });
    });

    test('test update data', () => {
        const state: DeepPartial<ProfileSchema> = {form: {firstname: '111'}};

        expect(profileReducer(
            state as ProfileSchema, 
            profileActions.updateProfile({firstname: '123'})))
            .toEqual({
                form: {firstname: '123'}
            });
    });

    test('test update data service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
            .toEqual({
                isLoading: true,
                validateErrors: undefined
            });
    });

    test('test update data service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
            .toEqual({
                isLoading: false,
                validateErrors: undefined,
                readonly: true,
                form: data,
                data,
            });
    });
});