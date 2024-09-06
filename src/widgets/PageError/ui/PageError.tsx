import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';

interface PageErrorProps {
    className?: string;
}

export const PageError: React.FC<PageErrorProps> = (props: PageErrorProps) => {
    const { className } = props;
    const {t} = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>{t('An unexpected error occurred')}</p>
            <Button onClick={reloadPage}> 
                {t('Refresh the page')}
            </Button>
        </div>
    );
};