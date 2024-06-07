import { classNames } from 'shared/lib/classNames/classNames';
import cls from './StoreProvider.module.scss';
import { createReduxStore } from '../config/store';
import { Provider } from 'react-redux';
import { StateShema } from '../config/StateShema';
import { ReactNode } from 'react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateShema>;
    asyncReducers?: ReducersList,
    
}

export const StoreProvider: React.FC<StoreProviderProps> = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    //const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateShema, 
        asyncReducers as ReducersMapObject<StateShema>,
        //navigate,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};