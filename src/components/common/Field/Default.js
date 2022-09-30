import React, { useState } from 'react';
import { useField } from 'formik';

const Default = ({ ...props }) => {
  const [field, meta] = useField(props);
  const [input, setInput] = useState('');
  return (
    <div className="form-floating mb-3">
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        autoComplete="off"
        {...field}
        {...props}
        // required={true}
        className={`form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border-2 border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 dark:focus:border-blue focus:outline-none
        ${
          meta.error && meta.touched
            ? 'focus:border-red-700'
            : 'focus:border-blue-700'
        }`}
      />
      {meta.touched && meta.error && (
        <p className="text-red-500 mt-3 text-sm">{meta.error}</p>
      )}
    </div>
  );
};

export default Default;
