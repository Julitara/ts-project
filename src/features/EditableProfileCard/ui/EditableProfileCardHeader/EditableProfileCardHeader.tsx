import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import { 
    getProfileData, 
    getProfileReadonly 
} from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';


interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader: 
    React.FC<EditableProfileCardHeaderProps> = (props: EditableProfileCardHeaderProps) => {
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
                                data-testid='EditableProfileCardHeader.EditButton'
                            >
                                {t('edit')}
                            </Button>
                            :
                            <HStack gap='8'>
                                <Button 
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid='EditableProfileCardHeader.CancelButton'
                                >
                                    {t('cancel')}
                                </Button>
                                <Button 
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                    data-testid='EditableProfileCardHeader.SaveButton'
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