import type { Request, Response } from 'express';
import { IUserTheme, UserTheme } from '../../models';

export const saveTheme = async (req: Request, res: Response) => {
  try {
    const { userId, theme }: Omit<IUserTheme, 'id'> = req.body;

    if (!userId || !theme) {
      return res
        .status(400)
        .json({ message: 'Необходимы идентификатор пользователя и тема' });
    }

    const [userTheme] = await UserTheme.upsert(
      { userId, theme },
      { returning: true },
    );

    return res.status(200).json(userTheme);
  } catch (error) {
    return res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
};

export const getTheme = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res
        .status(400)
        .json({ message: 'Необходим идентификатор пользователя' });
    }

    const userTheme = await UserTheme.findOne({
      where: { userId },
    });

    if (!userTheme) {
      return res.status(404).json({
        theme: 'light',
        message: 'Тема не найдена, используется значение по умолчанию',
      });
    }

    return res.status(200).json({ theme: userTheme.get('theme') });
  } catch (error) {
    return res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
};
