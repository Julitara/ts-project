import { StateShema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';


describe('getLoginLoading.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                username: 'admin'
            }
        };
        expect(getLoginUsername(state as StateShema)).toEqual('admin');
    });

    test('empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getLoginUsername(state as StateShema)).toEqual('');
    });
});