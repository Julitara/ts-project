import { CombinedState, Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateShema, ThunkExtraArg } from './StateShema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import { scrollSaveReducer } from 'features/ScrollSave';
import { rtkApi } from 'shared/api/rtkApi';

export function createReduxStore(
    initialState?: StateShema, 
    asyncReducers?: ReducersMapObject<StateShema>,
    //navigate?: (to: To, options?: NavigateOptions) => void
) {

    const rootReducers: ReducersMapObject<StateShema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollSave: scrollSaveReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
        //navigate
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateShema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            }
        }).concat(rtkApi.middleware)
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];