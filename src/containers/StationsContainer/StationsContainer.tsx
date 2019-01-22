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
import trainsByDirection from '../../helpers/trainsByDirection';
import formatDate from '../../helpers/formatDate';

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
                    const { name, distance, id, trains, codes } = station;
                    const sortedTrains: any = trainsByDirection(trains, codes);
                    const lines = Object.keys(sortedTrains);
                    const formattedTime = formatDate(trains[0].observedDate);
                    return (
                      <Card
                        key={id}
                        header={name}
                        subheader={`${distance.toFixed(2)} miles away`}
                        meta={`Updated ${formattedTime}`}
                      >
                        <FlexWrapContainer>
                          <NextTrainsHeader>Next Trains</NextTrainsHeader>
                          {lines.map((line: string) =>
                            sortedTrains[line].map((trains: Train[]) => (
                              <NextTrains trains={trains} />
                            ))
                          )}
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
