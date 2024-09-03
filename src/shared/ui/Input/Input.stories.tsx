import { ComponentStory, ComponentMeta } from '@storybook/react';
import {  Input } from './Input';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Input',
    component:  Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type text',
    value: 'value'
};

export const PrimaryThemeDark = Template.bind({});
PrimaryThemeDark.args = {};
PrimaryThemeDark.decorators = [ThemeDecorator(Theme.DARK)];