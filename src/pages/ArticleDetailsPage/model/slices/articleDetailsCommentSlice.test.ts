import { fetchCommentByArticleId } from '../services/fetchCommentByArticleId/fetchCommentByArticleId';
import { ArticleDetailsCommentShema } from '../types/ArticleDetailsCommentShema';
import { articleDetailsCommentsReducer } from './articleDetailsCommentSlice';

const data = [{
    id: '1',
    text: 'text',
    user: {id: '1', username: 'user'}
}];

describe('articleDetailsCommentSlice.test', () => {

    test('test fetch comment pending', () => {
        const state: DeepPartial<ArticleDetailsCommentShema> = {
            isLoading: false,
            error: 'error'
        };

        expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentShema, 
            fetchCommentByArticleId.pending
        ))
            .toEqual({
                isLoading: true,
                error: undefined
            });
    });

    test('test fetch comment fulfilled', () => {
        const state: DeepPartial<ArticleDetailsCommentShema> = {
            isLoading: true,
            error: 'error'
        };

        expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentShema, 
            fetchCommentByArticleId.fulfilled(data, '', '')
        ))
            .toEqual({
                entities: 
                    {
                        '1': 
                            {
                                'id': '1', 
                                'text': 'text', 
                                'user': {'id': '1', 'username': 'user'}
                            }}, 
                error: 'error', 
                ids: ['1'], 
                isLoading: false
            });
    });
});