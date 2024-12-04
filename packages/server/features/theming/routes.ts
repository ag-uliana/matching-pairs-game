import { Router } from 'express';
import { saveTheme, getTheme } from './themeController';

export const themeRoutes = Router();

themeRoutes.post('/get', getTheme);
themeRoutes.put('/save', saveTheme);
