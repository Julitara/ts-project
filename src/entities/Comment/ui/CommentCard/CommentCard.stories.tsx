import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
   title: '[FTName/^(?:[^\\\\]*\\\\){3}([^\\\\]+).*/$1/]/CommentCard',
   component: CommentCard,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
