import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { 
    getProfileData, 
    getProfileReadonly, 
    profileActions, 
    updateProfileData 
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: 
    React.FC<ProfilePageHeaderProps> = (props: ProfilePageHeaderProps) => {
        const {
            className,
        } = props;
        const {t} = useTranslation('profile');
        const readonly = useSelector(getProfileReadonly);
        const dispatch = useAppDispatch();
        const authData = useSelector(getUserAuthData);
        const profileData = useSelector(getProfileData);
        const canEdit = authData?.id === profileData?.id;

        const onEdit = useCallback(() => {
            dispatch(profileActions.setReadonly(false));            
        }, [dispatch]);

        const onCancelEdit = useCallback(() => {
            dispatch(profileActions.cancelEdit());
        }, [dispatch]);

        const onSave = useCallback(() => {
            dispatch(updateProfileData());
        }, [dispatch]);

        return (
            <HStack justify='between' max className={classNames('', {}, [className])}>
                <Text title={t('profile user')}/>
                {canEdit &&
                    <>
                        {readonly ?
                            <Button 
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                            >
                                {t('edit')}
                            </Button>
                            :
                            <HStack gap='8'>
                                <Button 
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    {t('cancel')}
                                </Button>
                                <Button 
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t('save')}
                                </Button>
                            </HStack>
                        }
                    </>
                }
            </HStack>
        );
    };