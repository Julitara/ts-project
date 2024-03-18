import { StateShema } from 'app/providers/StoreProvider';

export const getCounter = (state: StateShema) => state.counter;