import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = (props: LoginModalProps) => {
    const { 
        className,
        isOpen,
        onClose 
    } = props;

    return (
        <Modal 
            className={classNames(cls.loginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm/>
        </Modal>
    );
};