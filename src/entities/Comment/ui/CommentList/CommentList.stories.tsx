import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
   title: '[FTName/^(?:[^\\\\]*\\\\){3}([^\\\\]+).*/$1/]/CommentList',
   component: CommentList,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
