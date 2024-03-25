import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { useTranslation } from 'react-i18next';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text: React.FC<TextProps> = (props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
    } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames('', {}, [className, cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};