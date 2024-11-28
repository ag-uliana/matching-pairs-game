import { SERVER_API_URL } from '@/shared/config/env';
import { Theme } from '../constants/theme';

export const saveTheme = async (userId: string, theme: Theme) => {
  const response = await fetch(`${SERVER_API_URL}/theme/save`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, theme }),
  });

  if (!response.ok) {
    throw new Error('Ошибка при сохранении темы');
  }
};

export const loadTheme = async (
  userId: string,
  defaultTheme: Theme = Theme.LIGHT,
): Promise<Theme> => {
  try {
    const response = await fetch(`${SERVER_API_URL}/theme/get`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });

    if (response.status === 404) {
      console.warn('Тема не найдена. Используется тема по умолчанию.');
      return defaultTheme;
    }

    if (!response.ok) {
      throw new Error('Ошибка при загрузке темы');
    }

    const data = await response.json();
    return data.theme || defaultTheme;
  } catch (error) {
    console.error('Ошибка при загрузке темы:', error);
    return defaultTheme;
  }
};
