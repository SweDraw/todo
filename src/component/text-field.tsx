import React, {FC} from "react";
import {Field} from "redux-form";

export type TextFieldProps = {
  className?: string;
  nameField: string;
  fieldText: string;
}

const TextField: FC<TextFieldProps> = ({className, nameField, fieldText}) => {

  return (
    <label className={`field ${className}`}>
      <Field
        component="input"
        type="text"
        name={nameField}
        className="field__input"
      />
      <span className="field__text">{fieldText}</span>
    </label>
  )
};

export default TextField;