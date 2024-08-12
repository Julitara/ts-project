/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthOpen] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onCloseModal = useCallback(() => {
        setIsAuthOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthOpen(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text 
                    className={cls.titleName}
                    title={'TypeScript App'}
                    theme={TextTheme.INVERTED}
                />
                <AppLink 
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createLink}
                >
                    {t('Создать статью')}
                </AppLink>
                <Dropdown
                    className={cls.dropdown} 
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
                />
            </header>
        );
    }
  
    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button 
                className={cls.links} 
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('sign')}
            </Button>
            {isAuthModal &&
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
            }
           
        </header>
    );
});
