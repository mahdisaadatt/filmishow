import React, { useState } from 'react';

const Default = ({ type, title }) => {
  const [input, setInput] = useState('');
  return (
    <div className="form-floating mb-3 sm:w-96">
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        autoComplete="off"
        type={type}
        required={true}
        className="form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 dark:focus:border-blue focus:outline-none"
        placeholder={title}
      />
    </div>
  );
};

export default Default;
