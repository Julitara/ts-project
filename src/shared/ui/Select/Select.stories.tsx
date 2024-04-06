import { ComponentStory, ComponentMeta } from '@storybook/react';
import {  Select } from './Select';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'TEST',
    options: [
        {value: '123', content: 'One'},
        {value: '123', content: 'Two'},
        {value: '123', content: 'Three'}
    ]
};
