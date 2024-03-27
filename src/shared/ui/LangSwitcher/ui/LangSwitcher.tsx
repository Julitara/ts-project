import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props: LangSwitcherProps) => {
    const { className, short } = props;

    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button 
            className={classNames(cls.langSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR} 
            onClick={toggle}>
            {t( short ? 'shortLang' : 'lang')}
        </Button>
        
    );
};
