import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider';
import { 
    ArticleDetailsPageRecommendationsShema 
} from '../types/ArticleDetailsPageRecommendationsShema';
import { Article } from 'entities/Article';
import { 
    fetchArticleRecommendations 
} from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
  
export const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateShema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
);
  
const articleDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendationsSlice',
    initialState: 
        recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsShema>({
            error: undefined,
            isLoading: false,
            ids: [],
            entities: {}
        }),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, 
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    recommendationsAdapter.setAll(state, action.payload);
                })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});
  
export const {
    reducer: articleDetailsPageRecommendationsReducer
} = articleDetailsPageRecommendationsSlice;
export const {
    actions: articleDetailsPageRecommendationsActions
} = articleDetailsPageRecommendationsSlice;