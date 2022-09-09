import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useNavigate, useParams } from 'react-router-dom';

const Search = ({ breakPoint, size, fieldStyle, borderStyle, setMenuOpen }) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const { q } = useParams();
  const onSubmit = e => {
    e.preventDefault();
    if (input && q !== input) {
      setMenuOpen(false);
      setInput('');
      navigate(`/search/${input}/`);
    }
  };
  return (
    <form
      className={`${breakPoint} justify-between items-center rounded-md ${size} ${borderStyle} border-2`}
      onSubmit={onSubmit}
      onClick={e => e.stopPropagation()}
    >
      <input
        value={input}
        type="text"
        onChange={e => setInput(e.target.value)}
        placeholder="دنبال چه فیلمی میگردی ؟"
        className={`outline-none px-3 py-2 w-full rounded-r bg-transparent ${fieldStyle}`}
      />
      <button type="submit" className="m-2">
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>
    </form>
  );
};

Search.defaultProps = {
  breakPoint: 'flex flex-row',
  fieldStyle: 'placeholder:text-white',
  borderStyle: '',
};

export default Search;
