import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import SearchInput from '../Search/SearchInput';

const UPDATE_TERM = gql`
  mutation fetchLocations($locationSearch: String!) {
    fetchLocations(locationSearch: $locationSearch) @client
  }
`;

const SearchBar = () => (
  <Mutation mutation={UPDATE_TERM}>
    {fetchLocations => (
      <SearchInput
        type="text"
        onChange={e =>
          fetchLocations({ variables: { locationSearch: e.target.value } })
        }
      />
    )}
  </Mutation>
);

export default SearchBar;
