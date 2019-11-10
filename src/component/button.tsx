// * Lib
import React, {FC, ButtonHTMLAttributes} from "react";
// * Style
import '../style/button.scss';

export enum ColorType {
  blue = "blue",
  green = "green"
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  buttonText: string;
  colorHover?: ColorType;
}

const Button: FC<ButtonProps> =
  ({
     buttonText,
     type = "button",
     className = '',
     colorHover = "blue",
    ...parameterButton
   }) => {

    return (
      <button
        className={`button button--${colorHover} ${className}`.trim()}
        type={type}
        {...parameterButton}
      >
        {buttonText}
      </button>
    )
  };

export default Button;