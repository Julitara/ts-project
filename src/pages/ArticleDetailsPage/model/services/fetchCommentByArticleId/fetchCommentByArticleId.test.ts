import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchCommentByArticleId } from './fetchCommentByArticleId';

const data = {
    id: '1',
    text: 'text',
    user: {id: '1', username: 'user'}
};

describe('fetchCommentByArticleId.test', () => {

    test('success fetch', async () => {
        const thunk = new TestAsyncThunk(fetchCommentByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({data: data}));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchCommentByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});