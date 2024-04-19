import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: '[TM_DIRECTORY/^(?:[^\\\\]*\\\\){3}([^\\\\]+).*/$1/]/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
