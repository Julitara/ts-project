import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string;
}

export const BugButton: React.FC<BugButtonProps> = (props: BugButtonProps) => {
    const { className } = props;
    const [error, setError] = useState(false);
    const {t} = useTranslation();

    const throwError = () => setError(true);

    useEffect(() => {
        if(error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button 
            onClick={throwError} 
            className={classNames('', {}, [className])}>
            {t('throw error')}
        </Button>
    );
};