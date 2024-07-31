import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
   title: '[FTName/^(?:[^\\\\]*\\\\){3}([^\\\\]+).*/$1/]/ArticleDetailsComments',
   component: ArticleDetailsComments,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
