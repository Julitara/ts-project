import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from '../getProfileData/getProfileData';

describe('getProfoleData.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error'
            }
        };
        expect(getProfileError(state as StateSchema)).toEqual('error');
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual('');
    });
});