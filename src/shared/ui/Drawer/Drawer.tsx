import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { useModal } from 'shared/lib/hooks/useModal/useModal';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}
const ANIMATION_DELAY = 300;

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
        lazy
    } = props;

    const {
        close, 
        isClosing, 
        isMounted
    } = useModal({animationDelay: ANIMATION_DELAY, onClose, isOpen});

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
});
