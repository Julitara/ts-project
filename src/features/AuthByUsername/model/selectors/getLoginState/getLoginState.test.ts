import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginState } from './getLoginState';


describe('getLoginLoading.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
                password: '123'
            }
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'admin',
            password: '123'
        });
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});