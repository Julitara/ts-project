import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = (props: NotFoundPageProps) => {
    const { className } = props;
    const {t} = useTranslation();

    return (
        <Page data-testid='NotFoundPage' className={classNames(cls.notFoundPage, {}, [className])}>
            {t('NotFoundPAge')}
        </Page>
    );
};