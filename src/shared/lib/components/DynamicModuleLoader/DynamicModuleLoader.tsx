import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManadger } from 'app/providers/StoreProvider';
import { StateSchema, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSсhema';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [nameKey in StateSchemaKey]?: Reducer<NonNullable<StateSchema[nameKey]>>;
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    children?: ReactNode;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = 
    (props: DynamicModuleLoaderProps) => {
        const {
            children,
            reducers,
            removeAfterUnmount = true
        } = props;
        
        const store = useStore() as ReduxStoreWithManadger;
        const dispatch = useDispatch();

        useEffect(() => {
            const mountedReducers = store.reducerManager.getMountedReducers();
            Object.entries(reducers).forEach(([key, reducer]) => {
                const mounted = mountedReducers[key as StateSchemaKey];

                if (!mounted) {
                    store.reducerManager.add(key as StateSchemaKey, reducer);
                    dispatch({type: `@INIT ${key} reducer`}); 
                }
            });
    
            return () => {
                if (removeAfterUnmount) {
                    Object.entries(reducers).forEach(([key]) => {
                        store.reducerManager.remove(key as StateSchemaKey);
                        dispatch({type: `@DESTROY ${key} reducer`});
                    });
                }
            };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
            <>
                {children}
            </>
        );
    };