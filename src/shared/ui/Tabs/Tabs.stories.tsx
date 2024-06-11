import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from './Tabs';
import { action } from '@storybook/addon-actions';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs { ...args } />;

export const Normal = Template.bind({});
Normal.args = {
    tabs: [
        {
            value: 'tab 1',
            content: 'tab 111'
        },
        {
            value: 'tab 2',
            content: 'tab 222'
        },
        {
            value: 'tab 3',
            content: 'tab 333'
        }
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick')
};
