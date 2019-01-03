import React, { Component } from 'react';

import Card from '../blocks/Card/Card';
import Search from '../components/Search/Search';

export default class TripContainer extends Component {
  state = { search: '' };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    this.setState({ search: value }, () => console.log(this.state.search));
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
        <Card
          header="Hi Card"
          subheader="hello"
          text="Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
        />
      </div>
    );
  }
}
