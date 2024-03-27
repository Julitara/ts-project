import { AnyAction, CombinedState, Reducer, ReducersMapObject } 
    from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { CounterShema } from 'entities/Counter';
import { UserShema } from 'entities/User';
import { LoginShema } from 'features/AuthByUsername';


export interface StateShema {
    counter: CounterShema;
    user: UserShema;

    //async reducers
    loginForm?: LoginShema;
}

export type StateShemaKey = keyof StateShema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateShema>;
    reduce: (state: StateShema, action: AnyAction) => CombinedState<StateShema>;
    add: (key: StateShemaKey, reducer: Reducer) => void;
    remove: (key: StateShemaKey) => void;
}

export interface ReduxStoreWithManadger extends ToolkitStore<StateShema> {
    reducerManager: ReducerManager
}