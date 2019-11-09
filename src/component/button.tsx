// * Lib
import React, {FC, useContext} from "react";
// * Context
import {ThemeContext} from "../context/theme";
// * Style
import '../style/button.scss';

export enum ColorType {
  blue = "blue",
  green = "green"
}

export type ButtonProps = {
  handleClick: () => void;
  className?: string;
  buttonText: string;
  colorHover?: ColorType;
}

const Button: FC<ButtonProps> = (
  {
    handleClick,
    buttonText,
    className = '',
    colorHover = "blue"
  }) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      className={`button button--theme-${theme} button--background-${colorHover} ${className}`.trim()}
      onClick={() => handleClick()}
    >
      {buttonText}
    </button>
  )
};

export default Button;