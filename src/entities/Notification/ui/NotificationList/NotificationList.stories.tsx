import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationList } from './NotificationList';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
//import withMock from "storybook-addon-mock";
import { Notification } from '../../model/types/notification';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

const notificationData: Notification = {
    id: '1',
    title: 'testtitile',
    description: 'testdescr',
    href: '',
};

export const Normal = Template.bind({});
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                { ...notificationData, id: '1' },
                { ...notificationData, id: '2' },
                { ...notificationData, id: '3' },
                { ...notificationData, id: '4' },
            ],
        },
    ],
};
