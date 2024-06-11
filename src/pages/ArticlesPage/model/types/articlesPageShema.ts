import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageShema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    _inited?: boolean;

    //pagination
    page: number;
    limit: number;
    hasMore: boolean;

    //filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
}