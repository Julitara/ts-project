import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileLoading } from '../getProfileData/getProfileData';

describe('getProfileLoading.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true
            }
        };        
        expect(getProfileLoading(state as StateSchema)).toEqual(true);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileLoading(state as StateSchema)).toEqual(undefined);
    });
});