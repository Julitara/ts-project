import { classNames } from 'shared/lib/classNames/classNames';
//import cls from './ProfilePage.module.scss';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 
    'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';

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

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
       
    );
};

export default ProfilePage;