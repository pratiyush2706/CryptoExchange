import React, { Fragment } from 'react';
import inputStyle from './inputBox.module.css';

const InputBox = ({
  type,
  isValid,
  style,
  label,
  name,
  showLabel,
  placeholder,
  onChange,
  inputRef,
  isTextArea,
  ...otherAttributes
}) => (
    <Fragment>
      <label className={inputStyle.inputLabel} htmlFor={name} hidden={!showLabel}>
        {label}
      </label>
      {(() => (isTextArea ? (
        <textarea
          className={
            isValid
              ? `${inputStyle.inputBox} ${inputStyle.validInput}`
              : `${inputStyle.inputBox} ${inputStyle.invalidInput}`
          }
          style={style}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          ref={inputRef}
          {...otherAttributes}
        />
      ) : (
          <input
            className={
              isValid
                ? `${inputStyle.inputBox} ${inputStyle.validInput}`
                : `${inputStyle.inputBox} ${inputStyle.invalidInput}`
            }
            style={style}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            ref={inputRef}
            {...otherAttributes}
          />
        )))()}
    </Fragment>
  );

export default InputBox;
