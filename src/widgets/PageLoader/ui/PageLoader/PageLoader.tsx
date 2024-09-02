import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import { Loader } from '@/shared/ui/Loader/Loader';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = (props: PageLoaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader/>
        </div>
    );
};