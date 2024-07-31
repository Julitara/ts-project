import { StateShema } from 'app/providers/StoreProvider';
import { getProfileLoading } from '../getProfileData/getProfileData';

describe('getProfileLoading.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateShema> = {
            profile: {
                isLoading: true
            }
        };        
        expect(getProfileLoading(state as StateShema)).toEqual(true);
    });

    test('empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getProfileLoading(state as StateShema)).toEqual(undefined);
    });
});