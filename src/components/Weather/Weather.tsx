import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Card from '../../blocks/Card/Card';
import P from '../../elements/P';
import WeatherData from '../WeatherData/WeatherData';

interface IProps {
  lat: number;
  lng: number;
}

const WEATHER = gql`
  query nearestStations($lat: Float!, $lng: Float!) {
    weather(lat: $lat, lng: $lng) {
      currently {
        temperature
        summary
        apparentTemperature
      }
      hourly {
        summary
      }
      daily {
        data {
          temperatureMax
          temperatureMin
        }
      }
    }
  }
`;

const Weather = ({ lat, lng }: IProps) => (
  <Query query={WEATHER} variables={{ lat, lng }} pollInterval={5000}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      const { currently, hourly, daily } = data.weather;
      console.log(daily);
      return (
        <Card header={'Today'}>
          <WeatherData currently={currently} hourly={hourly} daily={daily} />
        </Card>
      );
    }}
  </Query>
);

export default Weather;
