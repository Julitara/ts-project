import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateShema } from './StateShema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateShema) {

    const rootReducers: ReducersMapObject<StateShema> = {
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateShema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}