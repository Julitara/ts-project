import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
    const { 
        className, 
        children, 
        isOpen, 
        onClose,
        lazy 
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const [isMounted, setIsMounted] = useState(false);

    const closeHandler = useCallback(() => {
        if(onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if(isOpen) {
            setIsMounted(true);
        }
    },[isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown );
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    },[isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <Overlay onClick={closeHandler}/>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};