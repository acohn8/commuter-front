import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import Search from '../../components/Search/Search';
import ResultItem from '../../components/ResultItem/ResultItem';
import WhiteBackground from '../../blocks/WhiteBackground/WhiteBackground';
import LocationList from '../../components/LocationList/LocationList';
import { Location, LocationQuery } from '../../types/SearchTypes';
import ListSelect from '../../components/ListSelect/ListSelect';

const SET_ACTIVE_KEY = gql`
  mutation UpdateActiveIdKey($key: Int) {
    updateActiveIdKey(key: $key) @client {
      activeId
    }
  }
`;

export default class SearchContainer extends Component {
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
            <LocationList>
              {(data: LocationQuery) => {
                console.log(data);
                const { locations, index, search } = data;
                return (
                  <>
                    <Search handleSubmit={this.handleSubmit} value={search} />
                    <WhiteBackground>
                      {locations.length > 0 &&
                        locations.map((feature: Location) => (
                          <ListSelect key={feature.id} feature={feature.id}>
                            <ResultItem
                              placeName={feature.place_name}
                              index={locations.indexOf(feature)}
                              active={locations.indexOf(feature) === index}
                            />
                          </ListSelect>
                        ))}
                    </WhiteBackground>
                  </>
                );
              }}
            </LocationList>
          </div>
        )}
      </Mutation>
    );
  }
}
