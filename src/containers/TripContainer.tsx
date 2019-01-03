import React, { Component } from 'react';
import { FlattenedLocation } from '../types/SearchTypes';

import Search from '../components/Search/Search';
import locationSearch from '../api/locationSearch';
import ResultItem from '../components/ResultList/ResultItem';

export default class TripContainer extends Component {
  state = { search: '', locations: [] };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const { search } = this.state;
    this.setState({ search: value }, async () => {
      if (search) {
        const locations = await locationSearch(this.state.search);
        this.setState({ locations });
      }
    });
  };

  render() {
    const { search, locations } = this.state;
    return (
      <div>
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={search}
        />
        {locations.length > 0 && (
          <div>
            {locations.map((location: FlattenedLocation) => (
              <ResultItem key={location.id} placeName={location.placeName} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
