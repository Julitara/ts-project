import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { 
    DynamicModuleLoader, 
    ReducersList 
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { 
    getArticleDetailsData,
    getArticleDetailsError, 
    getArticleDetailsLoading 
} from '../../model/selectors/getArticleDetailsData';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Avatar } from '@/shared/ui/Avatar';
import EyeIcon from '@/shared/assets/icons/eye.svg?react';
import CalendarIcon from '@/shared/assets/icons/calendar.svg?react';
import { Icon } from '@/shared/ui/Icon';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { 
    ArticleImageBlockComponent 
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { 
    ArticleTextBlockComponent 
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ArticleBlockType } from '../../model/consts/consts';

interface ArticleDetailsProps {
   className?: string;
   id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent 
                    key={block.id} 
                    className={cls.block} 
                    block={block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent 
                    key={block.id} 
                    className={cls.block} 
                    block={block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent 
                    key={block.id} 
                    className={cls.block} 
                    block={block}
                />
            );
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if(isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width={'100%'} height={200} />
                <Skeleton className={cls.skeleton} width={'100%'} height={200} />
            </>
            
        );
    } else if (error) {
        content = (
            <Text title={'ERROR'} align={TextAlign.CENTER}/>
        );
    } else {
        content = (
            <>
                <HStack justify='center' max className={cls.avatarWrapper}>
                    <Avatar 
                        size={200} 
                        src={article?.img} 
                        className={cls.avatar}
                    />
                </HStack>
                <VStack gap='4' max>
                    <Text 
                        className={cls.title} 
                        title={article?.title} 
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap='8' className={cls.articleInfo}>
                        <Icon Svg={EyeIcon} className={cls.icon}/>
                        <Text text={String(article?.views)}/>
                    </HStack>
                    <HStack gap='8' className={cls.articleInfo}>
                        <Icon Svg={CalendarIcon} className={cls.icon}/>
                        <Text text={article?.createdAt}/>
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap='16' max className={classNames(cls.articleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
        
    );
});