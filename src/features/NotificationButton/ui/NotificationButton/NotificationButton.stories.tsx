import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationButton } from './NotificationButton';

export default {
    title: '[FTName/^(?:[^\\\\]*\\\\){3}([^\\\\]+).*/$1/]/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
