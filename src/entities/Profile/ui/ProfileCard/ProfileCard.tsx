import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency?: Currency) => void;
    onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeLastname,
        onChangeFirstname,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry

    } = props;
    const {t} = useTranslation('profile');

    if(isLoading) {
        return (
            <HStack 
                justify='center' 
                max 
                className={classNames(cls.profileCard, {}, [className, cls.loading])}
            >
                <Loader/>
            </HStack>
        );
    }

    if(error) {
        return (
            <HStack 
                justify='center' 
                max 
                className={classNames(cls.profileCard, {}, [className, cls.error])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('profile error')}
                    text={t('profile refresh page')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly
    };

    return (
        <VStack gap='16' max className={classNames(cls.profileCard, mods, [className])}>
            {data?.avatar && 
                    (<HStack justify='center' max className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </HStack>)
            }
            <Input
                value={data?.firstname}
                placeholder={t('firstname')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid='ProfileCard.Firstname'
            />
            <Input
                value={data?.lastname}
                placeholder={t('lastname')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid='ProfileCard.Lastname'
            />
            <Input
                value={data?.age}
                placeholder={t('Your age')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
                data-testid='ProfileCard.Age'
            />
            <Input
                value={data?.city}
                placeholder={t('Your city')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
                data-testid='ProfileCard.City'
            />
            <Input
                value={data?.username}
                placeholder={t('Your username')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
                data-testid='ProfileCard.Username'
            />
            <Input
                value={data?.avatar}
                placeholder={t('Avatar')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
                data-testid='ProfileCard.Avatar'
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
                data-testid='ProfileCard.Currency'
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
                data-testid='ProfileCard.Country'
            />
        </VStack>
    );
};