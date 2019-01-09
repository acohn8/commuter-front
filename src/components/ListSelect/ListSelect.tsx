import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

interface IProps {
  feature: string;
  children: any;
}

const SAVE_LOCATION = gql`
  mutation SaveUserLocation($feature: String!) {
    saveUserLocation(feature: $feature) @client
  }
`;

const ListSelect = ({ feature, children }: IProps) => (
  <Mutation mutation={SAVE_LOCATION} variables={{ feature }}>
    {saveUserLocation => (
      <div onClick={saveUserLocation as any}>{children}</div>
    )}
  </Mutation>
);

export default ListSelect;
