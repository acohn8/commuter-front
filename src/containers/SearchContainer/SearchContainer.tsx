import React, { Component } from 'react';

import { FlattenedLocation } from '../../types/SearchTypes';
import Search from '../../components/Search/Search';
import locationSearch from '../../api/locationSearch';
import ResultItem from '../../components/ResultItem/ResultItem';
import WhiteBackground from '../../blocks/WhiteBackground/WhiteBackground';
import allStations from '../AllStations/AllStations';
import AllStations from '../AllStations/AllStations';

interface IProps {
  setSelectedLocation: (location: FlattenedLocation) => void;
}

interface IState {
  search: string;
  locations: FlattenedLocation[];
  activeIndex: number;
}

export default class SearchContainer extends Component<IProps> {
  readonly state: IState = {
    search: '',
    locations: [],
    activeIndex: 0
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setSelectedLocation();
  };

  handleClick = () => {
    this.setSelectedLocation();
  };

  setSelectedLocation = () => {
    const { locations, activeIndex } = this.state;
    this.setState(
      {
        locations: [],
        activeIndex: 0,
        search: ''
      },
      () => this.props.setSelectedLocation(locations[activeIndex])
    );
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const { search } = this.state;
    this.setState({ search: value }, async () => {
      if (search) {
        const locations = await locationSearch(this.state.search);
        this.setState({ locations, activeIndex: 0 });
      } else {
        this.setState({ locations: [], activeIndex: 0 });
      }
    });
  };

  handleMouseOver = (e: React.MouseEvent, id: string) => {
    const activeIndex = this.state.locations.findIndex(
      location => location.id === id
    );
    this.setState({ activeIndex });
  };

  handleKeyPress = (e: React.KeyboardEvent) => {
    const { activeIndex, locations } = this.state;
    if (e.which === 40 && activeIndex < locations.length - 1) {
      this.setState({ activeIndex: activeIndex + 1 });
    } else if (e.which === 38 && activeIndex > 0) {
      this.setState({ activeIndex: activeIndex - 1 });
    }
  };

  render() {
    const { search, locations, activeIndex } = this.state;
    return (
      <div onKeyDown={this.handleKeyPress}>
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={search}
        />
        {locations.length > 0 && (
          <WhiteBackground>
            {locations.map((location: FlattenedLocation) => (
              <ResultItem
                key={location.id}
                placeName={location.placeName}
                id={location.id}
                handleMouseOver={this.handleMouseOver}
                active={locations.indexOf(location) - activeIndex === 0}
                handleClick={this.handleClick}
              />
            ))}
          </WhiteBackground>
        )}
        <AllStations />
      </div>
    );
  }
}
