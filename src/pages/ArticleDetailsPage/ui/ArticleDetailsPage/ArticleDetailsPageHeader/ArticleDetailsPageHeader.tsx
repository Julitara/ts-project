import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '../../../model/selectors/getCanEditArticle';
import { HStack } from '@/shared/ui/Stack';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
   className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(getRouteArticleEdit(article?.id || ''));
    }, [article?.id, navigate]);

    return (
        <HStack 
            max 
            justify='between' 
            className={classNames('', {}, [className])}
        >
            <Button 
                onClick={onBackToList}
                theme={ButtonTheme.OUTLINE}
            >
                {t('назад к списку')}
            </Button>
            {canEdit && <Button 
                onClick={onEditArticle}
                theme={ButtonTheme.OUTLINE}
            >
                {t('редактировать')}
            </Button>}
        </HStack>
    );
});