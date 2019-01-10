import React from 'react';
import UserLocation from '../../components/UserLocation/UserLocation';
import NearestStations from '../../components/NearestStations/NearestStations';
import Card from '../../blocks/Card/Card';

const StationsContainer = () => (
  <UserLocation>
    {(data: any) => {
      const [lng, lat] = data.userLocation.center;
      {
        return lat !== undefined ? (
          <NearestStations lat={lat} lng={lng}>
            {(sortedStations: any) => {
              return sortedStations.map((station: any) => {
                const { name, distance, id, address } = station;
                return (
                  <Card
                    key={id}
                    header={name}
                    subheader={`${distance.toFixed(2)} miles`}
                    text={address}
                  />
                );
              });
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
