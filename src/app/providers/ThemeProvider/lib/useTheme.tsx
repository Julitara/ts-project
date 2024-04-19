import { useContext } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.PINK;
            break;
        case Theme.PINK:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { 
        theme: Theme.LIGHT, 
        toggleTheme 
    };
}
