import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique voluptates corporis totam et dicta velit quas! Corrupti officia eveniet qui dolores animi dolorum sunt praesentium! Eveniet aperiam nulla odit voluptates.',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique voluptates corporis totam et dicta velit quas! Corrupti officia eveniet qui dolores animi dolorum sunt praesentium! Eveniet aperiam nulla odit voluptates.',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];