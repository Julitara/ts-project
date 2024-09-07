import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/user-avatar-not-found.svg?react';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
    const {
        className,
        src, 
        size = 100,
        alt,
        fallbackInverted
    } = props;

    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size
        };
    }, [size]);

    const errorFallback = (
        <Icon 
            inverted={fallbackInverted} 
            Svg={UserIcon} 
            width={size} 
            height={size}
        />
    );
    const fallback = <Skeleton width={size} height={size} border={'50%'}/>;

    return (
        <AppImage 
            fallback={fallback}
            errorFallback={errorFallback}
            src={src} 
            className={classNames(cls.avatar, mods, [className])}
            style={styles} 
            alt={alt}
        />
    );
};