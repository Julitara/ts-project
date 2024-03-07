import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const {t} = useTranslation()
  
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink className={cls.mainLink} to={'/'} theme={AppLinkTheme.SECONDARY}>
          {t('Главная страница')}
        </AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};
