import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    lazy?: boolean;
    animationDelay?: number;
}

export function useModal(props: UseModalProps) {
    const {
        onClose,
        isOpen,
        animationDelay
    } = props;
    
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const [isMounted, setIsMounted] = useState(false);

    const close = useCallback(() => {
        if(onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [onClose, animationDelay]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            close();
        }
    }, [close]);

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

    return {
        close,
        isMounted,
        isClosing
    };
}