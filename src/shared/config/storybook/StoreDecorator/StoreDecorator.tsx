import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateShema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateShema>> = {
    loginForm: loginReducer,
    profile: profileReducer
};

export default function StoreDecorator(
    state: DeepPartial<StateShema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateShema>>
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