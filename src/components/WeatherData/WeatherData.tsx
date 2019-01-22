import React from 'react';
import * as Skycons from 'react-skycons';
import P from '../../elements/P';

interface IProps {
  currently: {
    icon: string;
    temperature: number;
    summary: string;
    apparentTemperature: number;
  };
  hourly: {
    summary: string;
  };
  daily: {
    data: {
      temperatureMax: number;
      temperatureMin: number;
    }[];
  };
}

const WeatherData = ({ currently, hourly, daily }: IProps) => (
  <>
    <div style={{ width: '50%' }}>
      <h4>Now</h4>
      <P>{Math.round(currently.temperature)} degrees</P>
      <P>{currently.summary}</P>
    </div>
    <div style={{ width: '50%' }}>
      <h4>Today</h4>
      <P>{hourly.summary}</P>
      <P>High: {Math.round(daily.data[0].temperatureMax)} degrees</P>
      <P>Low: {Math.round(daily.data[0].temperatureMin)} degrees</P>
    </div>
  </>
);

export default WeatherData;
