import { StateShema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';


describe('getLoginLoading.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                password: '123'
            }
        };
        expect(getLoginPassword(state as StateShema)).toEqual('123');
    });

    test('empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getLoginPassword(state as StateShema)).toEqual('');
    });
});