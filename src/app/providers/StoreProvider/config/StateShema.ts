import { AnyAction, CombinedState, Reducer, ReducersMapObject } 
    from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AxiosInstance } from 'axios';
import { CounterShema } from 'entities/Counter';
import { ProfileShema } from 'entities/Profile';
import { UserShema } from 'entities/User';
import { LoginShema } from 'features/AuthByUsername';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateShema {
    counter: CounterShema;
    user: UserShema;

    //async reducers
    loginForm?: LoginShema;
    profile?: ProfileShema;
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

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateShema;
}