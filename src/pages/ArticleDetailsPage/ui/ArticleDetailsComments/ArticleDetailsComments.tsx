import { CommentList } from 'entities/Comment';
import { AddCommentFormAsync } from 'features/AddCommentForm';
import { 
    getArticleCommentsError, 
    getArticleCommentsIsLoading 
} from '../../model/selectors/comments';
import { 
    addCommentForArticle 
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import { 
    getArticleComments 
} from '../../model/slices/articleDetailsCommentSlice';
import { memo, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { TextSize, Text } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { 
    fetchCommentByArticleId 
} from '../../model/services/fetchCommentByArticleId/fetchCommentByArticleId';
import { VStack } from 'shared/ui/Stack';
import { Loader } from 'shared/ui/Loader/Loader';

interface ArticleDetailsCommentsProps {
   className?: string;
   id?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);
    const dispatch = useDispatch();

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
    });

    return (
        <VStack gap={'16'} max className={classNames('', {}, [className])}>
            <Text 
                title={t('Comments')} 
                size={TextSize.L}
            />
            <Suspense fallback={<Loader/>}>
                <AddCommentFormAsync onSendComment={onSendComment}/>
            </Suspense>
            <CommentList 
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
});