import { classNames } from 'shared/lib/classNames/classNames';
//import cls from './ProfilePage.module.scss';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 
    'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { 
    ProfileCard, 
    ValidateProfileError, 
    fetchProfileData, 
    getProfileForm, 
    getProfileReadonly, 
    getProfileValidateErrors, 
    profileActions, 
    profileReducer 
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getProfileError } from 'entities/Profile';
import { getProfileLoading } from 'entities/Profile';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';

const reducers: ReducersList = {
    profile: profileReducer
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props: ProfilePageProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const { id } = useParams<{ id: string }>();

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('server error'),
        [ValidateProfileError.INCORRECT_USER_AGE]: t('incorrect user age'),
        [ValidateProfileError.INCORRECT_USER_COUNTRY]: t('incorrect user country'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('incorrect user data'),
        [ValidateProfileError.NO_DATA]: t('no data')
    };

    useInitialEffect(() => {
        if(id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback((value?: string | undefined) => {
        dispatch(profileActions.updateProfile({firstname: value}));
    },[dispatch]);
    
    const onChangeLastname = useCallback((value?: string | undefined) => {
        dispatch(profileActions.updateProfile({lastname: value}));
    },[dispatch]);

    const onChangeAge = useCallback((value?: string | undefined) => {
        dispatch(profileActions.updateProfile({age: Number(value || 0)}));
    },[dispatch]);

    const onChangeCity = useCallback((value?: string | undefined) => {
        dispatch(profileActions.updateProfile({city: value}));
    },[dispatch]);

    const onChangeUsername = useCallback((value?: string | undefined) => {
        dispatch(profileActions.updateProfile({city: value}));
    },[dispatch]);

    const onChangeAvatar = useCallback((value?: string | undefined) => {
        dispatch(profileActions.updateProfile({city: value}));
    },[dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency | undefined) => {
        dispatch(profileActions.updateProfile({currency}));
    },[dispatch]);

    const onChangeCountry = useCallback((country?: Country | undefined) => {
        dispatch(profileActions.updateProfile({country}));
    },[dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames('', {}, [className])}>
                <VStack gap='16' max>
                    <ProfilePageHeader/>
                    {validateErrors?.length && validateErrors.map((err, i) => (
                        <Text 
                            theme={TextTheme.ERROR} 
                            text={validateErrorTranslates[err]} 
                            key={i}
                        />
                    ))}
                    <ProfileCard 
                        data={formData}
                        isLoading={isLoading}
                        error={error}
                        onChangeFirstname={onChangeFirstname}
                        onChangeLastname={onChangeLastname}
                        onChangeCity={onChangeCity}
                        onChangeAge={onChangeAge}
                        onChangeUsername={onChangeUsername}
                        onChangeAvatar={onChangeAvatar}
                        onChangeCurrency={onChangeCurrency}
                        onChangeCountry={onChangeCountry}
                        readonly={readonly}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
       
    );
};

export default ProfilePage;