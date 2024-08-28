import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StarRaiting } from './StarRating';

export default {
    title: 'shared/StarRaiting',
    component: StarRaiting,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StarRaiting>;

const Template: ComponentStory<typeof StarRaiting> = (args) => <StarRaiting { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
