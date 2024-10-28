import { addDecorator } from '@storybook/react';
import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
//import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from 
    '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import {Theme} from '../../src/shared/const/theme';

export const parameters = {
    actions: {
        actions: {
            onClick: () => {console.log('1');},  // Или укажите реальную функцию, если нужно
            onSubmit: () => {console.log('1');} // Или укажите реальную функцию
        },
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: ['app', Theme.LIGHT], color: '#ffffff' },
            { name: 'dark', class: ['app', Theme.DARK], color: '#000000' },
            { name: 'pink', class: ['app', Theme.PINK], color: '#ea198f' },
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
//addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(SuspenseDecorator);
export const tags = ['autodocs', 'autodocs'];
