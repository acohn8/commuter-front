import React from 'react';
import SearchInput from './SearchInput';
import SearchLabel from './SearchLabel';

interface IProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Search = ({ handleSubmit, handleChange, value }: IProps) => (
  <>
    <form onSubmit={handleSubmit}>
      <Search.Label>Enter your address</Search.Label>
      <Search.Input type="text" onChange={handleChange} value={value} />
      <input type="submit" hidden />
    </form>
  </>
);

Search.Input = SearchInput;
Search.Label = SearchLabel;

export default Search;
