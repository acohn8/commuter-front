import gql from 'graphql-tag';
import { client } from '.';
import { Location } from './types/SearchTypes';

interface LocationsResponse {
  data: {
    geocode: {
      features: Location[];
    };
  };
}

const resolvers = {
  Query: {},
  Mutation: {
    fetchLocations: async (_: any, { locationSearch }: any, { cache }: any) => {
      cache.writeData({
        data: {
          search: locationSearch
        }
      });
      const locations: LocationsResponse = await client.query({
        query: gql`
          query Geocode($location: String!) {
            geocode(location: $location) {
              features {
                place_name
                id
                center
              }
            }
          }
        `,
        variables: { location: locationSearch }
      });
      cache.writeData({
        data: {
          locations: locations.data.geocode.features
        }
      });
    },
    updateindex: (_: any, { index }: any, { cache }: any) => {
      cache.writeData({
        data: { index }
      });
      return null;
    },
    updateActiveIdKey: (_: any, { key }: any, { cache }: any) => {
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
    },
    saveUserLocation: async (
      _: any,
      { feature }: any,
      { cache, getCacheKey }: any
    ) => {
      const id = getCacheKey({ __typename: 'MapboxFeature', id: feature });
      const fragment = gql`
        fragment userLocation on Location {
          place_name
          center
        }
      `;
      const userLocation = cache.readFragment({ fragment, id });
      cache.writeData({
        data: {
          userLocation,
          locations: [],
          index: 0,
          search: userLocation.place_name
        }
      });
      console.log(
        client.readQuery({
          query: gql`
            {
              userLocation {
                place_name
                center
              }
            }
          `
        })
      );

      return null;
    }
  }
};

export default resolvers;
