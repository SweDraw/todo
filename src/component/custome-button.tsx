import React, {FC} from "react";
import '../style/custom-button.scss';

export enum ColorType {
  blue = "blue",
  green = "green"
}

export type CustomButtonProps = {
  handleClick: () => void;
  className?: string;
  buttonText: string;
  colorHover?: ColorType;
}

const CustomButton: FC<CustomButtonProps> = (
  {
    handleClick,
    buttonText,
    className = '',
    colorHover = "blue"
  }) => {

  return (
    <button
      className={`button button--${colorHover} ${className}`.trim()}
      onClick={() => handleClick()}
    >
      {buttonText}
    </button>
  )
};

export default CustomButton;