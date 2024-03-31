import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/items';
import { memo } from 'react';

interface SidebarItemProps {
    item?: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = memo((props: SidebarItemProps) => {
    const {
        item,
        collapsed
    } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.item, {[cls.collapsed]: collapsed}, [])}>
            <AppLink
                className={cls.item}  
                to={item.path} 
                theme={AppLinkTheme.SECONDARY}
            >
                <item.Icon className={cls.icon}/>
                <span className={cls.link}>{t(item.text)}</span>
            </AppLink>
        </div>
    );
});