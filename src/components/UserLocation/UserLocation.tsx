import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

interface IProps {
  children: any;
}

const STATIONS_QUERY = gql`
  {
    userLocation @client {
      center
    }
  }
`;

const UserLocation = ({ children }: IProps) => (
  <Query query={STATIONS_QUERY}>
    {({ data }) => data.userLocation !== undefined && children(data)}
  </Query>
);

export default UserLocation;
