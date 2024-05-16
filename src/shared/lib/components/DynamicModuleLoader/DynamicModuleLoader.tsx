import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManadger } from 'app/providers/StoreProvider';
import { StateShemaKey } from 'app/providers/StoreProvider/config/StateShema';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [nameKey in StateShemaKey]?: Reducer;
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
            Object.entries(reducers).forEach(([key, reducer]) => {
                store.reducerManager.add(key as StateShemaKey, reducer);
                dispatch({type: `@INIT ${key} reducer`});
            });
    
            return () => {
                if (removeAfterUnmount) {
                    Object.entries(reducers).forEach(([key]) => {
                        store.reducerManager.remove(key as StateShemaKey);
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