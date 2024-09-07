import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Tabs, TabsItem } from '@/shared/ui/Tabs';
import { ArticleType } from '@/entities/Article';

interface ArticleTypeTabsProps {
   className?: string;
   value: ArticleType;
   onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabsItem[]>(() =>[
        {
            value: ArticleType.IT,
            content: t('IT')
        },
        {
            value: ArticleType.ECONOMIC,
            content: t('ECONOMIC')
        },
        {
            value: ArticleType.SCIENCE,
            content: t('SCIENCE')
        },
        {
            value: ArticleType.ALL,
            content: t('ALL')
        },
    ], [t]);

    const onTabClick = useCallback((tab: TabsItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs 
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
        />
    );
});