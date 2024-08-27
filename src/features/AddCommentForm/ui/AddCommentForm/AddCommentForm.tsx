import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { 
    getAddCommentFormError, 
    getAddCommentFormText 
} from '../../model/selectors/getAddCommentFormSelector';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { 
    addCommentFormActions, 
    addCommentFormReducer 
} from '../../model/slice/addCommentFormSlice';
import { 
    DynamicModuleLoader, 
    ReducersList 
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/Stack';

export interface AddCommentFormProps {
   className?: string;
   onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack  
                max 
                justify='between'
                className={classNames(cls.addCommentForm, {}, [className])}
            >
                <Input
                    placeholder={t('Enter comment text')}
                    value={text}
                    onChange={onCommentTextChange}
                    className={cls.input}
                />
                <Button 
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >{t('Send')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
        
    );
});

export default AddCommentForm;