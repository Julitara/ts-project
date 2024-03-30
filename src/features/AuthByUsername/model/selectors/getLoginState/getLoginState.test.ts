import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';


describe('getLoginLoading.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                username: 'admin',
                password: '123'
            }
        };
        expect(getLoginState(state as StateShema)).toEqual({
            username: 'admin',
            password: '123'
        });
    });

    test('empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getLoginState(state as StateShema)).toEqual(undefined);
    });
});