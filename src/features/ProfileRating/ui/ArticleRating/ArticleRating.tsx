import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleRating.module.scss';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface ArticleRatingProps {
   className?: string;
   articleId: string;
}

export const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const {data, isLoading} = useGetArticleRating({
        userId: userData?.id ?? '', 
        articleId
    });

    //мутация возвращает массив из самой фукции кот мутирует и объект с данными
    const [rateArticleMutation, {isError}] = useRateArticle();
    
    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback  
            });
        } catch (error) {
            console.log(error);
        }
       
    }, [articleId, rateArticleMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width={'100%'} height={120} border={'8'}/>;
    }    

    const rating = data?.[0];

    

    return (
        <RatingCard
            onAccept={onAccept} 
            onCancel={onCancel}
            rate={rating?.rate}
            className={classNames(cls.articleRating, {}, [className])}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
            hasFreedback
        />
    );
});