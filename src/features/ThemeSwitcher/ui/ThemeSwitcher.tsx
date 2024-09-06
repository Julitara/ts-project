import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import LightIcon from '@/shared/assets/icons/theme-light.svg?react';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg?react';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { memo } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';


interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo((props: ThemeSwitcherProps) => {
    const { className } = props;

    const { theme, toggleTheme } = useTheme();    

    return (
        <Button 
            onClick={toggleTheme} 
            className={classNames(cls.themeSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon/>} 
        </Button>
    );
});
