import { Story } from '@storybook/react';
// eslint-disable-next-line path-checker-julitara/layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator = (StoryComponent: Story) => {
    return (
        <div>
            <StoryComponent/>
        </div>
    );
};