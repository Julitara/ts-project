import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';

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
                <AppLink
                    className={cls.item}  
                    to={RoutePath.main} 
                    theme={AppLinkTheme.SECONDARY}
                >
                    <MainIcon className={cls.icon}/>
                    <span className={cls.link}>{t('Главная страница')}</span>
                </AppLink>
                <AppLink 
                    className={cls.item}
                    to={RoutePath.about} 
                    theme={AppLinkTheme.SECONDARY}
                >
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed}/>
            </div>
        </div>
    );
};
