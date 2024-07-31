import { AnyAction, CombinedState, Reducer, ReducersMapObject } 
    from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AxiosInstance } from 'axios';
import { ArticleDetailsShema } from 'entities/Article';
import { CounterShema } from 'entities/Counter';
import { UserShema } from 'entities/User';
import { AddCommentFormShema } from 'features/AddCommentForm';
import { LoginShema } from 'features/AuthByUsername';
import { ProfileSchema } from 'features/EditableProfileCard';
import { ScrollSaveShema } from 'features/ScrollSave';
import {  
    ArticleDetailsPageShema
} from 'pages/ArticleDetailsPage';
import { ArticlesPageShema } from 'pages/ArticlesPage';
import { rtkApi } from 'shared/api/rtkApi';

export interface StateShema {
    counter: CounterShema;
    user: UserShema;
    scrollSave: ScrollSaveShema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

    //async reducers
    loginForm?: LoginShema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsShema;
    addCommentForm?: AddCommentFormShema;
    articlesPage?: ArticlesPageShema;
    articleDetailsPage?: ArticleDetailsPageShema;
}

export type StateShemaKey = keyof StateShema;
export type MountedReducers = OptionalRecord<StateShemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateShema>;
    reduce: (state: StateShema, action: AnyAction) => CombinedState<StateShema>;
    add: (key: StateShemaKey, reducer: Reducer) => void;
    remove: (key: StateShemaKey) => void;
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManadger extends ToolkitStore<StateShema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    //navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateShema;
}