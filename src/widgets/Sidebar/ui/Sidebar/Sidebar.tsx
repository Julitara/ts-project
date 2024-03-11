import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props:SidebarProps) => {
    const { className } = props;
    const {t} = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = async () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div 
            data-testid='sidebar' 
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button 
                data-testid='sidebar-toggle'
                onClick={onToggle}>
                {t('toggle')}
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};
