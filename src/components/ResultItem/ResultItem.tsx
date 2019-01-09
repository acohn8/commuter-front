import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import ResultItemContainer from './ItemContainer';
import ResultItemText from './ItemText';

const SET_ACTIVE = gql`
  mutation updateindex($index: Int!) {
    updateindex(index: $index) @client
  }
`;

interface IProps {
  placeName: string;
  index: number;
  active: boolean;
}

const ResultItem = ({ placeName, active, index }: IProps) => (
  <Mutation mutation={SET_ACTIVE} variables={{ index }}>
    {updateindex => (
      <ResultItemContainer onMouseOver={updateindex as any} active={active}>
        <ResultItem.Text>{placeName}</ResultItem.Text>
      </ResultItemContainer>
    )}
  </Mutation>
);

ResultItem.Container = ResultItemContainer;
ResultItem.Text = ResultItemText;

export default ResultItem;
