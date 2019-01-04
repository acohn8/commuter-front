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
            <Card header={station.name} />
          ))}
        </div>
      );
    }}
  </Query>
);

export default AllStations;
