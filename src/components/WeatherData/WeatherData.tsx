import React from 'react';
import P from '../../elements/P';

interface IProps {
  currently: {
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
      {console.log(daily)}
      <h4>Now</h4>
      <P>{currently.temperature}</P>
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
