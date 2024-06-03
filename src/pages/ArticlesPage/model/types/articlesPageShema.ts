import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageShema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;
    //pagination
    page: number;
    limit?: number;
    hasMore: boolean;
    _inited?: boolean;
}