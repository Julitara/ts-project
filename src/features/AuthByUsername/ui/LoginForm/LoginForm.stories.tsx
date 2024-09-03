import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginForm from './LoginForm';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';

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
Primary.decorators = [StoreDecorator({
    loginForm: {username: 'admin', password: '123'}
})];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
    loginForm: {username: 'admin', password: '123', error: 'error'}
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    loginForm: {isLoading: true}
})];

export const PrimaryThemeDark = Template.bind({});
PrimaryThemeDark.args = {};
PrimaryThemeDark.decorators = [StoreDecorator({
    loginForm: {username: 'admin', password: '123'}
}), ThemeDecorator(Theme.DARK)];