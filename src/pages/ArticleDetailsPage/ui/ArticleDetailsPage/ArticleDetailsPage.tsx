import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { 
    DynamicModuleLoader, 
    ReducersList 
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader/ArticleDetailsPageHeader';

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
                <VStack gap='16' max>
                    <ArticleDetailsPageHeader/>
                    <ArticleDetails id={id}/>
                    <ArticleRecommendationsList/>
                    <ArticleDetailsComments id={id}/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);