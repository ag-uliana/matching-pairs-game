import { ActionIcon, Tooltip } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store';
import { saveTheme } from '@/shared/api/themeService';
import { useUserData } from '@/entities/user';
import { Theme } from '@/shared/constants/theme';
import { setTheme, saveThemeToLocalStorage } from '../model';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  const { user } = useUserData();

  const handleThemeToggle = async () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    dispatch(setTheme(newTheme));
    saveThemeToLocalStorage(newTheme);

    if (user) {
      try {
        await saveTheme(user.id, newTheme);
      } catch (error) {
        showNotification({
          title: 'Ошибка',
          message: 'Ошибка при сохранении темы на сервере',
          color: 'red',
        });
      }
    }
  };

  return (
    <Tooltip
      label={
        theme === Theme.DARK
          ? 'Переключиться на светлую тему'
          : 'Переключиться на темную тему'
      }
      position="bottom"
      withArrow
    >
      <ActionIcon
        variant="outline"
        color={theme === Theme.DARK ? 'yellow' : 'var(--accent-color)'}
        onClick={handleThemeToggle}
        size="lg"
        radius="xl"
        className={className}
        styles={{
          root: {
            borderWidth: '2px',
          },
        }}
      >
        {theme === Theme.DARK
          ? String.fromCodePoint(0x2600)
          : String.fromCodePoint(0x1f319)}
      </ActionIcon>
    </Tooltip>
  );
};
