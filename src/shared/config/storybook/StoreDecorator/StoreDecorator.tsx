import { Story } from '@storybook/react';
import { StateShema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer
};

export default function StoreDecorator(
    state: DeepPartial<StateShema>,
    asyncReducers?: ReducersList
) {
    return function StoreDecorator (StoryComponent: Story) {
        return (
            <StoreProvider 
                initialState={state} 
                asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}
            >
                <StoryComponent />
            </StoreProvider>
        );
    };
}