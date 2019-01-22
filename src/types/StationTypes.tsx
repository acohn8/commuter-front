import { Train } from './TrainTypes';
import Code from './CodeTypes';

interface StationType {
  id: string;
  name: string;
  address: string;
  distance: number;
  trains: Train[];
  codes: Code[];
}

export default StationType;
