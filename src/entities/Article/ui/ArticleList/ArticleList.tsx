import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
   className?: string;
   articles: Article[];
   isLoading?: boolean;
   view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0).map((item, index) => (
            <ArticleListItemSkeleton key={index} view={view} className={cls.card}/>
        ));
};

export const ArticleList = memo((props: ArticleListProps) => {
    const { 
        className, 
        articles, 
        isLoading, 
        view = ArticleView.SMALL 
    } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem 
                article={article} 
                view={view}
                key={article.id}
                className={cls.card}
            />
        );
    };

    return (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
            {
                articles.length > 0 
                    ? 
                    articles.map(renderArticle)
                    :
                    null
            }
            {isLoading && getSkeletons(view)}
        </div>
    );
});