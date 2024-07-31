import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { TextSize, Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList } from '../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {data: articles, isLoading} = useArticleRecommendationsList(3);
    
    return (
        <VStack gap={'8'} className={classNames('', {}, [className])}>
            <Text 
                title={t('Recommendations')} 
                size={TextSize.L}
            />
            <ArticleList 
                articles={articles} 
                target={'_blank'}
            />
        </VStack>
    );
});