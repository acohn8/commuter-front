import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import Container from '../elements/Container';
import GlobalStyle from '../theme/globalStyle';
import SearchContainer from './SearchContainer/SearchContainer';
import { FlattenedLocation } from '../types/SearchTypes';

interface IState {
  selectedLocation: null | FlattenedLocation;
}
class App extends Component {
  state: IState = { selectedLocation: null };

  setSelectedLocation = (selectedLocation: FlattenedLocation) => {
    this.setState({ selectedLocation });
  };

  render() {
    const { selectedLocation } = this.state;
    return (
      <>
        <GlobalStyle />
        <Nav />
        <Container>
          <SearchContainer setSelectedLocation={this.setSelectedLocation} />
          {selectedLocation !== null && <h1>{selectedLocation.placeName}</h1>}
        </Container>
      </>
    );
  }
}

export default App;
