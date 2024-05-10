import { Article } from './article';

export interface ArticleDetailsShema {
    isLoading: boolean;
    error?: string;
    data?: Article
}