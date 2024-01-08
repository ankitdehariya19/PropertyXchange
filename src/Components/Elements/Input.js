
import React, { useState, useEffect } from 'react';

function Input(props) {
  const { name, value: propValue, label, id, onChange, ...rest } = props;
  const [text, setText] = useState("");

  useEffect(() => {
    setText(propValue || ''); 
  }, [propValue]);

  const onChangeHandler = (event) => {
    console.log(event.target.name,event.target.value)
    const value = event.target.value;
    setText(value);

    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 mb-2 h-14 text-sm  text-gray-400'
        onChange={onChangeHandler}
        value={text}
        {...rest}
      />
    </div>
  );
}

export default Input;
