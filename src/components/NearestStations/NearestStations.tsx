import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

interface IProps {
  lat: number;
  lng: number;
  children: any;
}

const NEAREST_STATIONS = gql`
  query nearestStations($lat: Float!, $lng: Float!) {
    sortedStations(lat: $lat, lng: $lng) {
      id
      name
      address
      distance(lat: $lat, lng: $lng)
      lines {
        name
      }
      trains {
        Destination
        minutesAway
      }
    }
  }
`;

const NearestStations = ({ lat, lng, children }: IProps) => (
  <Query query={NEAREST_STATIONS} variables={{ lat, lng }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      return children(data.sortedStations);
    }}
  </Query>
);

export default NearestStations;
