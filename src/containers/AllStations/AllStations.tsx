import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import StationType from '../../types/StationTypes';
import Card from '../../blocks/Card/Card';

const STATIONS_QUERY = gql`
  {
    stations {
      id
      name
      address
      distance(lat: 38.9642906, lng: -77.0763133)
      lines {
        id
        name
      }
    }
  }
`;

const AllStations = () => (
  <Query query={STATIONS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div>Fetching</div>;
      if (error) return <div>Error</div>;
      const { stations } = data;
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {stations.map((station: StationType) => (
            <Card
              key={station.id}
              header={station.name}
              subheader={`${Number(station.distance).toFixed(1)} miles`}
              text={station.address}
            />
          ))}
        </div>
      );
    }}
  </Query>
);

export default AllStations;
