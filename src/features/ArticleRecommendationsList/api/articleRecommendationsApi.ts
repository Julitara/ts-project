import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleReccomendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit
                }
            }),
        }),

        createArticleReccomendationsList: build.mutation({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit
                },
                method: 'POST'
            }),
        }),
    }),
});

export const useArticleRecommendationsList = 
recommendationsApi.useGetArticleReccomendationsListQuery;

export const useCreateRecommendationsList = 
recommendationsApi.useCreateArticleReccomendationsListMutation;