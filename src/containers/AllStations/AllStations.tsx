import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import StationType from '../../types/StationTypes';
import Card from '../../blocks/Card/Card';

const STATIONS_QUERY = gql`
  {
    userLocation @client {
      center
    }
    stations {
      name
    }
  }
`;

const AllStations = () => (
  <Query query={STATIONS_QUERY}>
    {({ data }) => (
      <div>
        hi
        {console.log(data)}
      </div>
    )}
  </Query>
);

export default AllStations;
