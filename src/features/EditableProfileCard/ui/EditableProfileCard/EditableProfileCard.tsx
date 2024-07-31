import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { ValidateProfileError } from '../../model/types/EditableProfileCardSchema';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileCard } from 'entities/Profile';
import { 
    DynamicModuleLoader, 
    ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { 
    getProfileError, 
    getProfileForm, 
    getProfileLoading, 
    getProfileReadonly, 
    getProfileValidateErrors 
} from '../../model/selectors/getProfileData/getProfileData';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

const reducers: ReducersList = {
    profile: profileReducer
};

interface EditableProfileCardProps {
    className?: string;
    id: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const {t} = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

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
            <EditableProfileCardHeader/>
            {validateErrors?.length && 
            validateErrors.map((err: ValidateProfileError) => (
                <Text 
                    theme={TextTheme.ERROR} 
                    text={validateErrorTranslates[err]} 
                    key={err}
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
        </DynamicModuleLoader>
    );
});