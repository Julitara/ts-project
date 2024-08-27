import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginError } from '../getLoginError/getLoginError';


describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error'
            }
        };
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});