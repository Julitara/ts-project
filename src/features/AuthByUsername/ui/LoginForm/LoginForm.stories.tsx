import { ComponentStory, ComponentMeta } from '@storybook/react';
import {  LoginForm } from './LoginForm';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryThemeDark = Template.bind({});
PrimaryThemeDark.args = {};
PrimaryThemeDark.decorators = [ThemeDecorator(Theme.DARK)];