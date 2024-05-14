import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { 
    DynamicModuleLoader, 
    ReducersList 
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    articleDetailsCommentsReducer, 
    getArticleComments
} from '../../model/slices/articleDetailsCommentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getArticleCommentsError, 
    getArticleCommentsIsLoading 
} from '../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentByArticleId } from '../../model/services/fetchCommentByArticleId';

interface ArticleDetailsPageProps {
   className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const {id} = useParams<{id: string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);
    const dispatch = useDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                {t('ERROR: NOT FOUND ARTICLE')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                <ArticleDetails id={id}/>
                <Text title={t('Comment')} className={cls.commentTitle}/>
                <CommentList 
                    isLoading={commentsIsLoading}
                    comments={comments}/>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);