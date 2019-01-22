import { Train } from '../types/TrainTypes';

const trainsByDirection = (trains: Train[], codes: any) => {
  console.log(codes);
  const byLineAndDirection = codes.reduce((acc: any, code: any) => {
    const { station_code } = code;
    const directionOne = trains.filter(
      (train: Train) =>
        station_code === train.LocationCode && train.directionNumber === 1
    );
    const directionTwo = trains.filter(
      (train: Train) =>
        station_code === train.LocationCode && train.directionNumber === 2
    );
    acc[code.station_code] = {};
    acc[code.station_code] = [directionOne, directionTwo];
    return acc;
  }, {});
  return byLineAndDirection;
};

export default trainsByDirection;
