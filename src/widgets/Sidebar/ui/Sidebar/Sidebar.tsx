import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { useSelector } from 'react-redux';
import {SidebarItemType} from '../../model/types/sidebar';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = memo((props: SidebarProps) => {
    const { className } = props;
    const sidebarItemList = useSelector(getSidebarItems);
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = async () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => sidebarItemList.map((item: SidebarItemType) => (
        <SidebarItem
            item={item}
            key={item.path}
            collapsed={collapsed}
        />
    )), [collapsed, sidebarItemList]);

    return (
        <menu 
            data-testid='sidebar' 
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button 
                data-testid='sidebar-toggle'
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {itemsList}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed}/>
            </div>
        </menu>
    );
});
