import { FC, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { 
    DynamicModuleLoader, 
    ReducersList 
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { 
    articlesPageReducer,  
} from '../../model/slices/articlePageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page/Page';
import { 
    fetchNextArticlePage 
} from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';

interface ArticlesPageProps {
   className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page 
                onScrollEnd={onLoadNextPart} 
                className={classNames(cls.articlesPage, {}, [className])}
            >
                <ArticlesPageFilters/>
                <ArticleInfiniteList className={cls.list}/>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);