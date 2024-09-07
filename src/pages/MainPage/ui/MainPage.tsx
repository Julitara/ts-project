import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('Главная страница')}
            <Counter/>
        </Page>
    );
};

export default MainPage;