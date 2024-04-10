import { StateShema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfoleData.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateShema> = {
            profile: {
                error: 'error'
            }
        };
        expect(getProfileError(state as StateShema)).toEqual('error');
    });

    test('empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getProfileError(state as StateShema)).toEqual('');
    });
});