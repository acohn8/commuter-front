import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import { FlattenedLocation } from '../../types/SearchTypes';
import Search from '../../components/Search/Search';
import ResultItem from '../../components/ResultItem/ResultItem';
import WhiteBackground from '../../blocks/WhiteBackground/WhiteBackground';
import LocationList from '../../components/LocationList/LocationList';

const SET_ACTIVE_KEY = gql`
  mutation UpdateActiveIdKey($key: Int) {
    updateActiveIdKey(key: $key) @client {
      activeId
    }
  }
`;

interface IProps {
  setSelectedLocation: (location: FlattenedLocation) => void;
}
export default class SearchContainer extends Component<IProps> {
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  render() {
    return (
      <Mutation mutation={SET_ACTIVE_KEY}>
        {updateActiveIdKey => (
          <div
            onKeyDown={e => {
              if (e.which === 40 || e.which === 38) {
                updateActiveIdKey({ variables: { key: e.which } });
              }
            }}
          >
            <Search handleSubmit={this.handleSubmit} />
            <WhiteBackground>
              <LocationList>
                {(data: any) => {
                  const { locations, index } = data;
                  return (
                    locations.length > 0 &&
                    locations.map((feature: any) => (
                      <ResultItem
                        key={feature.id}
                        placeName={feature.place_name}
                        index={locations.indexOf(feature)}
                        active={locations.indexOf(feature) === index}
                      />
                    ))
                  );
                }}
              </LocationList>
            </WhiteBackground>
          </div>
        )}
      </Mutation>
    );
  }
}
