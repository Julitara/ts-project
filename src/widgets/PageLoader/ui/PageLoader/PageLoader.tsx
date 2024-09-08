import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import { Loader } from '@/shared/ui/Loader';
import { Page } from '../../../Page/ui/Page/Page';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = (props: PageLoaderProps) => {
    const { className } = props;

    return (
        <Page data-testid='pageLoader' className={classNames(cls.pageLoader, {}, [className])}>
            <Loader/>
        </Page >
    );
};