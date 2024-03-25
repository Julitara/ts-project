import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateShema, StoreProvider } from 'app/providers/StoreProvider';

export default function StoreDecorator(state: DeepPartial<StateShema>) {
    return function StoreDecorator (StoryComponent: Story) {
        return (
            <StoreProvider initialState={state}>
                <StoryComponent />
            </StoreProvider>
        );
    };
}