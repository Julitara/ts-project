import { classNames } from 'shared/lib/classNames/classNames';
//import cls from './ProfilePage.module.scss';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 
    'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { 
    ProfileCard, 
    fetchProfileData, 
    getProfileForm, 
    getProfileReadonly, 
    profileActions, 
    profileReducer 
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getProfileError } from 'entities/Profile';
import { getProfileLoading } from 'entities/Profile';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

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
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

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
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader/>
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
            </div>
        </DynamicModuleLoader>
       
    );
};

export default ProfilePage;