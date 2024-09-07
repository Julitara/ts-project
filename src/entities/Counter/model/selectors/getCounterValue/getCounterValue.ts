import { buildSelector } from '@/shared/lib/store';

// export const getCounterValue = createSelector(
//     getCounter,
//     (counter: CounterShema) => counter.value
// );

export const [useCounterValue, getCounterValue] = buildSelector(state => state.counter.value);