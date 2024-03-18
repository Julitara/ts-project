import { configureStore } from '@reduxjs/toolkit';
import { StateShema } from './StateShema';
import { counterReducer } from 'entities/Counter';



export function createReduxStore(initialState?: StateShema) {
    return configureStore<StateShema>({
        reducer: {
            counter: counterReducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
}