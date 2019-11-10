// * Lib
import React, {FC, InputHTMLAttributes} from "react";
import {Field} from "redux-form";
// * Style
import '../style/field.scss';

export type TextFieldProps = {
  className?: string;
  nameField: string;
  fieldText: string;
  isReduxForm: boolean;
  fieldParameter?: InputHTMLAttributes<HTMLInputElement>
}

const TextField: FC<TextFieldProps> = ({className = '', nameField, fieldText, isReduxForm = true, fieldParameter}) => {
  const parameter = {
    className: `field__input ${className}`,
    type: "text",
    name: nameField,
    placeholder: ' '
  };
  const TextInput = isReduxForm
    ? (<Field
      component="input"
      {...parameter}
      {...fieldParameter}
    />)
    : (<input
      {...parameter}
      {...fieldParameter}
    />);

  return (
    <label className={`field ${className}`.trim()}>
      {/*<Field
        placeholder="&nbsp;"
        component="input"
        type="text"
        name={nameField}
        className="field__input"
      />*/}
      {TextInput}
      <span className="field__text">{fieldText}</span>
    </label>
  )
};

export default TextField;