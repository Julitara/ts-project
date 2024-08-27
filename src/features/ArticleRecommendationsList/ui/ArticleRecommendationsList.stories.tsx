import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';
import { Article } from '@/entities/Article';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock, StoreDecorator({})]
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

const article: Article = {
    id: '1',
    img: '',
    createdAt: '12.02.1990',
    views: 123,
    user: {id: '1', username: 'test'},
    blocks: [],
    title: 'Title',
    type: [],
    subtitle: 'subtitle'
};

export const Default = Template.bind({});
Default.parameters = {
    mockData: [
        {
            url:`${__API__}/articles?_limit=4`,
            method: 'GET',
            status: 200,
            response: [
                {...article, id: '1'},
                {...article, id: '2'},
                {...article, id: '3'},
                {...article, id: '4'}
            ],
        },
    ],
};