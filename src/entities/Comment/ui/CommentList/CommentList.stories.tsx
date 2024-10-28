import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'text1',
            user: { id: '1', username: 'greg' },
        },
        {
            id: '2',
            text: 'text2',
            user: { id: '1', username: 'greg' },
        },
    ],
};
// Normal.decorators = [
//     StoreDecorator({})
// ];
