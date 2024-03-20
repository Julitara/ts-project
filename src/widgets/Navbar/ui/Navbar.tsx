/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthOpen] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthOpen(true);
    }, []);
  
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button 
                className={cls.links} 
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('sign')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
        </div>
    );
};
