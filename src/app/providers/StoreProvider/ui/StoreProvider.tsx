import { classNames } from 'shared/lib/classNames/classNames';
import cls from './StoreProvider.module.scss';
import { createReduxStore } from '../config/store';
import { Provider } from 'react-redux';
import { StateShema } from '../config/StateShema';
import { ReactNode } from 'react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateShema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateShema>>
}

export const StoreProvider: React.FC<StoreProviderProps> = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    const store = createReduxStore(
        initialState as StateShema, 
        asyncReducers as ReducersMapObject<StateShema>
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};