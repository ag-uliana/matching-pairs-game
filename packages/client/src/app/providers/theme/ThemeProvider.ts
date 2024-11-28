import { useEffect, ReactNode, isValidElement } from 'react';
import { useSelector } from 'react-redux';
import { showNotification } from '@mantine/notifications';
import { useAppDispatch } from '@/shared/lib/store';
import { loadTheme } from '@/shared/api/themeService';
import { setTheme, loadThemeFromLocalStorage } from '@/features/theming';
import { useUserData } from '@/entities/user';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;
  const { user } = useUserData();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initializeTheme = async () => {
      let currentTheme = loadThemeFromLocalStorage();

      if (user) {
        try {
          const serverTheme = await loadTheme(user.id);
          currentTheme = serverTheme;
        } catch (error) {
          showNotification({
            title: 'Ошибка',
            message: 'Не удалось загрузить тему с сервера',
            color: 'red',
          });
        }
      }
      dispatch(setTheme(currentTheme));
    };

    initializeTheme();
  }, [dispatch, user]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  if (children && isValidElement(children)) {
    return children;
  }

  return null;
}
