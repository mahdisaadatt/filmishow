import React from "react";
import { useParams } from 'react-router-dom'

const SearchParams = () => {
  const { q } = useParams()
  return (
    <h1>{q}</h1>
  )
};

export default SearchParams;
