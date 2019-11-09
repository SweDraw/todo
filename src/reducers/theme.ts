import {ActionType} from "typesafe-actions";
import {Reducer} from "redux";

import {SET_THEME, THEME_TYPE} from "../types/theme";
import * as Actions from '../actions/theme';

export type ThemeActionType = ActionType<typeof Actions>;

export type ThemeState = {
  theme: THEME_TYPE;
}

export const INIT_STATE: ThemeState = {
  theme: THEME_TYPE.DARK
};

const ThemeReducer: Reducer<ThemeState, ThemeActionType> = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_THEME:{
      const {newTheme} = action.payload;
      return {
        ...state,
        theme: newTheme
      }
    }
    default:
      return state;
  }
};

export default ThemeReducer;