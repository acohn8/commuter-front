import React from 'react';
import SearchInput from './SearchInput';

interface IProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Search = ({ handleSubmit, handleChange, value }: IProps) => (
  <form onSubmit={handleSubmit}>
    <SearchInput type="text" onChange={handleChange} value={value} />
    <input type="submit" hidden />
  </form>
);

export default Search;
