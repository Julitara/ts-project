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
import { createReduxStore } from './store';

export interface StateSchema {
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

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManadger extends ToolkitStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    //navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];