import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
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
import { 
    fetchCommentByArticleId 
} from '../../model/services/fetchCommentByArticleId/fetchCommentByArticleId';
import { AddCommentFormAsync } from 'features/AddCommentForm';
import { 
    addCommentForArticle 
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { 
    getArticleRecommendations
} from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { 
    getArticleRecommendationsError, 
    getArticleRecommendationsLoading 
} from '../../model/selectors/recommendations';
import { 
    fetchArticleRecommendations 
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slices';

interface ArticleDetailsPageProps {
   className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const {id} = useParams<{id: string}>();
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsLoading = useSelector(getArticleRecommendationsLoading);
    const recommendationsError = useSelector(getArticleRecommendationsError);
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return (
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                {t('ERROR: NOT FOUND ARTICLE')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                <Button 
                    onClick={onBackToList}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('назад к списку')}
                </Button>
                <ArticleDetails id={id}/>
                <Text 
                    title={t('Recommendations')} 
                    className={cls.recommendTitle}
                    size={TextSize.L}
                />
                <ArticleList 
                    articles={recommendations} 
                    isLoading={recommendationsLoading}
                    className={cls.recommendList}
                    target={'_blank'}
                />
                <Text 
                    title={t('Comments')} 
                    className={cls.commentTitle}
                    size={TextSize.L}
                />
                <AddCommentFormAsync onSendComment={onSendComment}/>
                <CommentList 
                    isLoading={commentsIsLoading}
                    comments={comments}/>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);