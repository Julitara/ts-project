import { BugButton } from '@/app/providers/ErrorBoundary';
import { Counter } from '@/entities/Counter';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/shared/ui/StarRaiting/StarRating';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('Главная страница')}
            <BugButton/>
            <Counter/>
        </Page>
    );
};

export default MainPage;