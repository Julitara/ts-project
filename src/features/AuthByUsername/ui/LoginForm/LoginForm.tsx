import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducersList } 
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
};

const LoginForm: React.FC<LoginFormProps> = memo((props: LoginFormProps) => {
    const { className } = props;
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const password = useSelector(getLoginPassword);
    const username = useSelector(getLoginUsername);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({password, username}));
    }, [dispatch, password, username]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <DynamicModuleLoader reducers={initialReducers}  removeAfterUnmount>
            <div className={classNames(cls.loginForm, {}, [className])}>
                <Text title={t('form auth')}/>
                {error && <Text text={t('error login')} theme={TextTheme.ERROR}/>}
                <Input 
                    className='input'
                    onChange={onChangeUsername} 
                    autofocus
                    placeholder={t('Enter username')}
                    value={username}
                />
                <Input 
                    className='input'
                    onChange={onChangePassword} 
                    placeholder={t('Enter password')}
                    value={password}
                />
                <Button 
                    className={cls.loginBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('sign')}
                </Button>
            </div>
        </DynamicModuleLoader>
        
    );
});

export default LoginForm;