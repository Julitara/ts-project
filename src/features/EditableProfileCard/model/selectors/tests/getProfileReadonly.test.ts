import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from '../getProfileData/getProfileData';

describe('getProfoleData.test', () => {
    test('should return false', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: false
            }
        };        
        expect(getProfileReadonly(state as StateSchema)).toEqual(false);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});