/* eslint-disable i18next/no-literal-string */
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from '@/features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { NotificationList } from '@/entities/Notification';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthOpen] = useState(false);
    const authData = useSelector(getUserAuthData);
    
    const onCloseModal = useCallback(() => {
        setIsAuthOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthOpen(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text 
                    className={cls.titleName}
                    title={t('TypeScript App')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink 
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createLink}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack gap='16' className={cls.actions}>
                    <NotificationButton/>
                    <AvatarDropdown/>
                </HStack>
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
