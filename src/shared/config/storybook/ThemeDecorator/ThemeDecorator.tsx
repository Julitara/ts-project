import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export default function ThemeDecorator(theme: Theme) {
    return function ThemeDecorator (StoryComponent: Story) {
        return (
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        );
    };
}