import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { ArticleDetailsCommentShema } from '../types/ArticleDetailsCommentShema';
import { 
    fetchCommentByArticleId 
} from '../services/fetchCommentByArticleId/fetchCommentByArticleId';
  
export const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment: Comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateShema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);
  
const articleDetailsCommentSlice = createSlice({
    name: 'articleDetailsCommentSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentShema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {}
    }),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentByArticleId.fulfilled, 
                (state, action: PayloadAction<Comment[]>) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, action.payload);
                })
            .addCase(fetchCommentByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});
  
export const {reducer: articleDetailsCommentsReducer} = articleDetailsCommentSlice;
export const {actions: articleDetailsCommentsActions} = articleDetailsCommentSlice;