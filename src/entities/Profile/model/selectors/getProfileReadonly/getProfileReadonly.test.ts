import { StateShema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfoleData.test', () => {
    test('should return false', () => {
        const state: DeepPartial<StateShema> = {
            profile: {
                readonly: false
            }
        };        
        expect(getProfileReadonly(state as StateShema)).toEqual(false);
    });

    test('empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getProfileReadonly(state as StateShema)).toEqual(undefined);
    });
});