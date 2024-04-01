import { StateShema } from 'app/providers/StoreProvider';
import { getLoginLoading } from './getLoginLoading';


describe('getLoginLoading.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                isLoading: true
            }
        };
        expect(getLoginLoading(state as StateShema)).toEqual(true);
    });

    test('empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getLoginLoading(state as StateShema)).toEqual(false);
    });
});