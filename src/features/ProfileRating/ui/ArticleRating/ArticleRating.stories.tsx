import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleRating } from './ArticleRating';

export default {
   title: '/ArticleRating',
   component: ArticleRating,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
