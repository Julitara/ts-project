import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';


export interface ArticleDetailsPageRecommendationsShema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
}