import { memo } from 'react';
import cls from './ArticleListItem.module.scss';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Card } from 'shared/ui/Card/Card';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from '../../model/types/article';

interface ArticleListItemSkeletonProps {
   className?: string;
   view: ArticleView
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {

        return  (
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton border={'50%'} width={30} height={30}/>
                        <Skeleton width={150} height={16} className={cls.username}/>
                        <Skeleton width={150} height={16} className={cls.createdAt}/>
                    </div>
                    <Skeleton width={250} height={24} className={cls.title}/>
                    <Skeleton height={200} className={cls.img}/>
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200}/>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img}/>
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16}/>
                </div>
                <Skeleton width={150} height={16} className={cls.title}/>
            </Card>
        </div>
    );
});