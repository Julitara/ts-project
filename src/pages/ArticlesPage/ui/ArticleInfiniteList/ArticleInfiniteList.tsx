import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slices/articlePageSlice';
import { 
    getArticlesPageError, 
    getArticlesPageLoading, 
    getArticlesPageView 
} from '../../model/selectors/articlesPageSelectors';
import { useSearchParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { useTranslation } from 'react-i18next';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';

interface ArticleInfiniteListProps {
   className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();
    const { t } = useTranslation();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return <Text 
            theme={TextTheme.ERROR} 
            size={TextSize.L} 
            title={t('Ошибка при загрузке страницы')}
        />;
    }

    return (
        <ArticleList 
            isLoading={isLoading}
            view={view} 
            articles={articles}
            className={className}
        />
    );
});