import React from 'react';
import UserLocation from '../../components/UserLocation/UserLocation';
import NearestStations from '../../components/NearestStations/NearestStations';
import Card from '../../blocks/Card/Card';
import FlexWrapContainer from '../../blocks/FlexWrapContainer/FlexWrapContainer';

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
                    console.log(station);
                    const { name, distance, id, trains } = station;
                    return (
                      <Card
                        key={id}
                        header={name}
                        subheader={`${distance.toFixed(2)} miles`}
                        text={trains.map(
                          (train: any) =>
                            `${train.Destination}: ${train.minutesAway.toFixed(
                              2
                            )} minutes |`
                        )}
                      />
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
