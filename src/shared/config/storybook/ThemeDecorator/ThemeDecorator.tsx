// eslint-disable-next-line path-checker-julitara/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
import { Story } from '@storybook/react';

export default function ThemeDecorator(theme: Theme) {
    return function ThemeDecorator (StoryComponent: Story) {
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        );
    };
}