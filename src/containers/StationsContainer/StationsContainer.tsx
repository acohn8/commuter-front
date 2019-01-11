import React from 'react';
import UserLocation from '../../components/UserLocation/UserLocation';
import NearestStations from '../../components/NearestStations/NearestStations';
import Card from '../../blocks/Card/Card';
import FlexWrapContainer from '../../blocks/FlexWrapContainer/FlexWrapContainer';
import NextTrains from '../../components/NextTrains/NextTrains';
import { Train } from '../../types/TrainTypes';
import H5 from '../../elements/H5';
import NextTrainsHeader from './NextTrainsHeader';
import LineMetrics from '../../components/LineMetrics/LineMetrics';

interface Direction {
  direction: number;
  data: Train[];
}

const StationsContainer = () => (
  <UserLocation>
    {(data: any) => {
      const [lng, lat] = data.userLocation.center;
      {
        return lat !== undefined ? (
          <NearestStations lat={lat} lng={lng}>
            {(sortedStations: any) => {
              return (
                <FlexWrapContainer>
                  {sortedStations.map((station: any) => {
                    const { name, distance, id, trains } = station;
                    console.log(sortedStations);
                    return (
                      <Card
                        key={id}
                        header={name}
                        subheader={`${distance.toFixed(2)} miles away`}
                      >
                        <FlexWrapContainer>
                          <NextTrainsHeader>Next Trains</NextTrainsHeader>
                          {trains.map((direction: Direction) => (
                            <NextTrains
                              key={direction.direction}
                              trains={direction.data}
                            />
                          ))}
                        </FlexWrapContainer>
                      </Card>
                    );
                  })}
                </FlexWrapContainer>
              );
            }}
          </NearestStations>
        ) : (
          <div />
        );
      }
    }}
  </UserLocation>
);

export default StationsContainer;
