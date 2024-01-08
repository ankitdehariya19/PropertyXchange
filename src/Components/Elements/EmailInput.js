import React, { useState, useEffect } from 'react';

const EmailInput = ({ label, id, value: propValue, onChange, onBlur, ...rest }) => {
  const [text, setText] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setText(propValue || '');
    setIsValid(validateInput(propValue));
  }, [propValue]);

  const onChangeHandler = (event) => {
    console.log(event.target.name, event.target.value);
    const value = event.target.value;
    setText(value);

    if (onChange) {
      onChange(event.target.name, value);
    }
  };

  const onBlurHandler = () => {
    setIsTouched(true);
    setIsValid(validateInput(text));
    
    if (onBlur) {
      onBlur();
    }
  };

  const validateInput = (input) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(input);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        className={`border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 mb-2 h-14 text-sm  text-gray-400 ${isTouched && !isValid ? 'border-red-500' : ''}`}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        value={text}
        type="email"
        {...rest}
      />
      {isTouched && !isValid && (
        <p className="text-red-500 text-sm mt-1">
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
};

export default EmailInput;
