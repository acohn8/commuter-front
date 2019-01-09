import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';

require('dotenv').config();

interface Location {
  place_name: string;
  id: string;
}

interface Locations {
  data: {
    geocode: {
      features: Location[];
    };
  };
}

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  clientState: {
    defaults: {
      locations: [],
      index: 0
    },
    resolvers: {
      Query: {},
      Mutation: {
        fetchLocations: async (
          _: any,
          { locationSearch }: any,
          { cache }: any
        ) => {
          const locations: Locations = await client.query({
            query: gql`
              query Geocode($location: String!) {
                geocode(location: $location) {
                  features {
                    place_name
                    id
                  }
                }
              }
            `,
            variables: { location: locationSearch }
          });
          cache.writeData({
            data: { locations: locations.data.geocode.features }
          });
          return null;
        },
        updateindex: (_: any, { index }: any, { cache }: any) => {
          cache.writeData({
            data: { index }
          });
          return null;
        },
        updateActiveIdKey: (_: any, { key }: any, { cache }: any) => {
          if (key === 40 || key === 38) {
            const currentIndex: any = client.readQuery({
              query: gql`
                {
                  index
                }
              `
            });
            const { index } = currentIndex;
            if (key === 40 && index < 4) {
              cache.writeData({
                data: { index: index + 1 }
              });
            } else if (key === 38 && index > 0) {
              cache.writeData({
                data: { index: index - 1 }
              });
            }
            return null;
          }
        }
      }
    }
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
