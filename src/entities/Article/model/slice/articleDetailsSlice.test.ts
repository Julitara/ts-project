import { ArticleDetailsShema } from '../types/articleDetailsShema';
import { articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import {ArticleType } from '../types/article';


const data = {
    id: '1',
    title: 'title',
    subtitle: 'subtitle',
    img: 'src',
    views: 12,
    createdAt: '12.04.1993',
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://pbs.twimg.com/media/DVh_uJGWsAAbben?format=jpg&name=4096x4096'
    },
    type: [ArticleType.IT],
    blocks: []
};

describe('articleDetailsSlice.test', () => {
    
    test('test fetch article service pending', () => {
        const state: DeepPartial<ArticleDetailsShema> = {
            isLoading: false,
        };

        expect(articleDetailsReducer(state as ArticleDetailsShema, fetchArticleById.pending))
            .toEqual({
                isLoading: true,
            });
    });

    test('test fetch article service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsShema> = {
            isLoading: true,
        };

        expect(articleDetailsReducer(state as ArticleDetailsShema, fetchArticleById.fulfilled(data, '', '')))
            .toEqual({
                data,
                isLoading: false
            });
    });
});