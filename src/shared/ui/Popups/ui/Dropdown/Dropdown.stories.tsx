import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>OPEN</Button>,
    direction: 'bottom left',
    items: [
        { content: '111' },
        { content: '222', disabled: true },
        { content: '333' },
        { content: '444' },
    ],
};
