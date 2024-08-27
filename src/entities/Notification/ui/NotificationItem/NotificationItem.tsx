import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import {Text} from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface NotificationItemProps {
   className?: string;
   item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props; 

    const content = (
        <Card 
            className={classNames(cls.notificationItem, {}, [className])}
            theme={CardTheme.OUTLINED}
        >
            <Text title={item?.title} text={item?.description}/>
        </Card>
    );

    if (item?.href) {
        return (
            <a target={'_blank'} href={item?.href} className={cls.link} rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
});