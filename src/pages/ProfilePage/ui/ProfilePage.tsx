import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props: ProfilePageProps) => {
    const {
        className,
    } = props; 
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    if (!id) {
        return <Text 
            theme={TextTheme.ERROR} 
            size={TextSize.L} 
            title={t('Профиль не найден')}
        />;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap='16' max>
                <EditableProfileCard id={id}/>
            </VStack>
        </Page>
    );
};

export default ProfilePage;