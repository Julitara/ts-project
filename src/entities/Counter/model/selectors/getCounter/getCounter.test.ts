import { StateShema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('return counter value', () => {
        const state: DeepPartial<StateShema> = {
            counter: {value: 10}
        };
        expect(getCounter(state as StateShema)).toEqual({value: 10});
    });
});
