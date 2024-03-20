import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
    const { className } = props;
    const {t} = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input 
                className='input'
                //onChange={onChange} 
                //value={value}
                autofocus
                placeholder={t('Enter username')}
            />
            <Input 
                className='input'
                //onChange={onChange} 
                //value={value}
                placeholder={t('Enter password')}
            />
            <Button className={cls.loginBtn}>
                {t('sign')}
            </Button>
        </div>
    );
};