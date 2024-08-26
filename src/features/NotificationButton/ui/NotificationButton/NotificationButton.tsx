import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import NotificationIcon from 'shared/assets/icons/notify.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';
import { Drawer } from 'shared/ui/Drawer/Drawer';

interface NotificationButtonProps {
   className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useDevice();

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    console.log(isMobile);
    

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted/>
        </Button>
    );

    return (
        <>
            {isMobile ?
                <>
                    {trigger}
                    <AnimationProvider>
                        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                            <NotificationList/>
                        </Drawer>
                    </AnimationProvider>
                </>
                :
                <Popover 
                    trigger={trigger}
                    direction='bottom left'
                    className={classNames(cls.notificationButton, {}, [className])}
                >
                    <NotificationList className={cls.notifications}/>
                </Popover>
            }
        </>
        
    );
});