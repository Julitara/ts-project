import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/gerProfileError/gerProfileError';
import { getProfileLoading } from 
    'entities/Profile/model/selectors/gerProfileLoading/gerProfileLoading';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props: ProfileCardProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('profile user')}/>
                <Button 
                    theme={ButtonTheme.OUTLINE}
                    className={cls.editBtn}
                >
                    {t('edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.firstname}
                    placeholder={t('firstname')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('lastname')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};