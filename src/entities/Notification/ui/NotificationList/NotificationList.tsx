import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationList.module.scss';
import { useNotifications } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/Stack';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface NotificationListProps {
   className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {data, isLoading} = useNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack 
                gap='16' 
                className={classNames(cls.notificationList, {}, [className])}
            >
                <Skeleton width={300} border={'8px'} height={80} />
                <Skeleton width={300} border={'8px'} height={80} />
                <Skeleton width={300} border={'8px'} height={80} />
            </VStack>
        );
    }

    return (
        <VStack 
            gap='16'  
            className={classNames(cls.notificationList, {}, [className])}
        >
            {data?.map(item => (
                <NotificationItem key={item.id} item={item}/>
            ))}
        </VStack>
    );
});