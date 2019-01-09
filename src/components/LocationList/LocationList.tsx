import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

interface IProps {
  children: any;
}

const LOCATION_QUERY = gql`
  {
    locations @client {
      id
      place_name
    }
    index @client
    search @client
  }
`;

const LocationList = ({ children }: IProps) => (
  <Query query={LOCATION_QUERY}>{({ data }) => children(data)}</Query>
);

export default LocationList;
