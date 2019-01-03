import React, { Component } from 'react';
import debounce from 'lodash.debounce';

import Search from '../components/Search/Search';
import locationSearch from '../api/locationSearch';

export default class TripContainer extends Component {
  state = { search: '', locations: [] };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    this.setState({ search: value }, async () => {
      const locations = await locationSearch(this.state.search);
      this.setState({ locations });
    });
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={search}
        />
      </div>
    );
  }
}
