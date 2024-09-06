import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { addCommentForArticle } from './addCommentForArticle';

describe('fetchCommentForArticle.test', () => {

    const data = {
        articleId: '1',
        userId: '1',
        text: 'text',
        id: '23',
        user: {
            id: '1', 
            username: 'admin', 
            password: '123', 
            role: 'ADMIN',
            avatar: 'https://pbs.twimg.com/media/DVh_uJGWsAAbben?format=jpg&name=4096x4096',
        }};


    test('success post', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle);
        thunk.api.post.mockReturnValue(Promise.resolve({data: data}));
        const result = await thunk.callThunk('text');
        
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error post', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle);
        thunk.api.post.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk('text');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});