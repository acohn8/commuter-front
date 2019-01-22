import { Train } from '../types/TrainTypes';
import Code from '../types/CodeTypes';

interface TrainByLine {
  [key: string]: Train[] | {};
}

const trainsByDirection = (trains: Train[], codes: Code[]) => {
  const byLineAndDirection = codes.reduce((acc: TrainByLine, code: Code) => {
    const { station_code } = code;
    const directionOne = trains.filter(
      (train: Train) =>
        station_code === train.LocationCode && train.directionNumber === 1
    );
    const directionTwo = trains.filter(
      (train: Train) =>
        station_code === train.LocationCode && train.directionNumber === 2
    );
    acc[station_code] = {};
    acc[station_code] = [directionOne, directionTwo];
    return acc;
  }, {});
  return byLineAndDirection;
};

export default trainsByDirection;
