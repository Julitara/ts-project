import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'text1',
        user: { id: '1', username: 'greg' },
    },
    isLoading: false,
};

export const LoadingComment = Template.bind({});
LoadingComment.args = {
    comment: {
        id: '1',
        text: 'text1',
        user: {
            id: '1',
            username: 'greg',
            avatar:
        'https://i0.wp.com/securitymadesimple.org/wp-content/uploads/2023/03/a19aa-computerhacker.png?fit=1280%2C960&ssl=1',
        },
    },
    isLoading: true,
};
