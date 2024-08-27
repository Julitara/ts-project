import { ReactNode, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

export interface TabsItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
   className?: string;
   tabs: TabsItem[];
   value: string;
   onTabClick: (tab: TabsItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, value, onTabClick } = props;

    const clickHandle = useCallback((tab: TabsItem) => {
        return () => {
            onTabClick(tab);
        };
    }, [onTabClick]);

    return (
        <div className={classNames(cls.tabs, {}, [className])}>
            {tabs.map((tab, index) => (
                <Card 
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    key={index} 
                    className={cls.tab}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});