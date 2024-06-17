import { ArticleDetailsCommentShema } from './ArticleDetailsCommentShema';
import { ArticleDetailsPageRecommendationsShema } from './ArticleDetailsPageRecommendationsShema';

export interface ArticleDetailsPageShema {
    comments: ArticleDetailsCommentShema;
    recommendations: ArticleDetailsPageRecommendationsShema;
}