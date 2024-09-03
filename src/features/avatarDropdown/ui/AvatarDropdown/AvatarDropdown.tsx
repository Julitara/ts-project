import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { RoutePath } from '@/shared/const/router';

interface AvatarDropdownProps {
   className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            items={[
                {
                    content: t('profile'),
                    href: RoutePath.profile + authData.id
                },
                ...(isAdminPanelAvailable ? [{
                    content: t('admin panel'),
                    href: RoutePath.admin_panel
                }] : []),
                {
                    content: t('logout'),
                    onClick: onLogout
                }
            ]} 
            trigger={<Avatar size={30} src={authData.avatar}/>}
            direction='bottom left'
            className={classNames(cls.avatarDropdown, {}, [className])}
        />
    );
});