import React from 'react';
import FlexWrapContainer from '../../blocks/FlexWrapContainer/FlexWrapContainer';
import { Train } from '../../types/TrainTypes';
import NextTrainsTable from './NextTrainsTable';
import NextTrainsTableHeader from './NextTrainsTableHeader';
import NextTrainsTableCell from './NextTrainsTableCell';
import NextTrainsBody from './NextTrainsBody';
import NextTrainsLineIndicator from './NextTrainsLineIndicator';

interface IProps {
  trains: Train[];
}

const NextTrains = ({ trains }: any) => (
  <div style={{ width: '100%' }}>
    <NextTrains.Table>
      <NextTrains.Body>
        <tr>
          <NextTrains.Header>DESTINATION</NextTrains.Header>
          <NextTrains.Header>MINUTES AWAY</NextTrains.Header>
        </tr>
        {trains.slice(0, 3).map((train: Train) => (
          <tr key={train.trainId}>
            <NextTrainsTableCell>
              <NextTrains.LineIndicator line={train.Line} />
              {train.Destination}
            </NextTrainsTableCell>
            <NextTrainsTableCell>
              {train.minutesAway.toFixed(1)}
            </NextTrainsTableCell>
          </tr>
        ))}
      </NextTrains.Body>
    </NextTrains.Table>
  </div>
);

NextTrains.Wrapper = FlexWrapContainer;
NextTrains.Table = NextTrainsTable;
NextTrains.Body = NextTrainsBody;
NextTrains.Header = NextTrainsTableHeader;
NextTrains.Cell = NextTrainsTableCell;
NextTrains.LineIndicator = NextTrainsLineIndicator;

export default NextTrains;
