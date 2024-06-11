import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { MutableRefObject, ReactNode, useRef, UIEvent } from 'react';
import { useScroll } from 'shared/lib/hooks/useScroll/useScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollSaveByPath, scrollSaveActions } from 'features/ScrollSave';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateShema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

interface PageProps {
   className?: string;
   children: ReactNode;
   onScrollEnd?: () => void;
}

export const Page = ((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const {pathname} = useLocation();
    const scrollPosition = useSelector(
        (state: StateShema) => getScrollSaveByPath(state, pathname));

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    useScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {        
        dispatch(scrollSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname
        }));
    }, 500);

    return (
        <section 
            onScroll={onScroll}
            ref={wrapperRef} 
            className={classNames(cls.page, {}, [className])}
        >
            {children}
            {onScrollEnd ? <div ref={triggerRef} className={cls.trigger}/> : null}
            
        </section>
    );
});