import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateShema } from './StateShema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

export function createReduxStore(initialState?: StateShema) {

    const rootReducers: ReducersMapObject<StateShema> = {
        counter: counterReducer,
        user: userReducer 
    };

    return configureStore<StateShema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
}