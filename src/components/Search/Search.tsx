import React from 'react';
import SearchLabel from './SearchLabel';
import SearchBar from '../SearchBar/SearchBar';

interface IProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string | undefined;
}

const Search = ({ handleSubmit, value }: IProps) => (
  <>
    {console.log(value)}
    <form onSubmit={handleSubmit}>
      <Search.Label>Enter your address</Search.Label>
      <Search.Input value={value} />
      <input type="submit" hidden />
    </form>
  </>
);

Search.Input = SearchBar;
Search.Label = SearchLabel;

export default Search;
