import React, { ReactChildren } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ResultItem from '../ResultItem/ResultItem';

interface IProps {
  children: any;
}

interface Location {
  id: string;
  place_name: string;
}

const LOCATION_QUERY = gql`
  {
    locations @client {
      id
      place_name
    }
    index @client
  }
`;

const LocationList = ({ children }: IProps) => (
  <Query query={LOCATION_QUERY}>
    {({ data }) => {
      return children(data);
    }}
  </Query>
);

export default LocationList;
