import { StateShema } from 'app/providers/StoreProvider';
import { getLoginError } from '../getLoginError/getLoginError';


describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                error: 'error'
            }
        };
        expect(getLoginError(state as StateShema)).toEqual('error');
    });

    test('empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getLoginError(state as StateShema)).toEqual(undefined);
    });
});