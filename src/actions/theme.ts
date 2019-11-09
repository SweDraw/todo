import {action} from "typesafe-actions";
import {THEME_TYPE ,SET_THEME} from '../types/theme';

export const setTheme = (newTheme: THEME_TYPE) => action(SET_THEME, {newTheme});