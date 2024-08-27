import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserAuthData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article';
import { fetchCommentByArticleId } from '../fetchCommentByArticleId/fetchCommentByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/sendComment', 
    async (text, thunkAPI) => {

        const { extra, dispatch, rejectWithValue, getState} = thunkAPI;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article?.id,
                userId: userData.id,
                text,
            });
            if (!response.data) {
                throw new Error();
            }
            dispatch(fetchCommentByArticleId(article.id));
            return response.data;
            
        } catch (error) {
            return rejectWithValue('error');
        }
    });