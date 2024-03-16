/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthOpen(prev => !prev);
    }, []);
  
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button 
                className={cls.links} 
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('sign')}
            </Button>

           
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* // eslint-disable-next-line i18next/no-literal-string */}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Similique voluptates corporis totam et dicta velit quas! 
                Corrupti officia eveniet qui dolores animi dolorum sunt 
                praesentium! Eveniet aperiam nulla odit voluptates.
            </Modal>
        </div>
    );
};
