import { createReduxStore } from '../config/store';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSсhema';
import { ReactNode } from 'react';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
    
}

export const StoreProvider: React.FC<StoreProviderProps> = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    //const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema, 
        asyncReducers as ReducersMapObject<StateSchema>,
        //navigate,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};