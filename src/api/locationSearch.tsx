import { LocationResponse } from '../types/SearchTypes';

const locationSearch = async (query: string) => {
  const locationResponse = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${
      process.env.REACT_APP_MAPBOX_KEY
    }&country=us&proximity=-77.0366%2C%2038.895&autocomplete=true&language=`
  );
  const parsedResponse = await locationResponse.json();
  if (parsedResponse.features !== undefined && parsedResponse.features.length) {
    const formattedLocations = formatLocation(parsedResponse.features);
    return formattedLocations;
  } else {
    return [];
  }
};

const formatLocation = (locations: [LocationResponse]) => {
  const formattedLocations = locations.map((location: LocationResponse) => ({
    id: location.id,
    coords: location.center,
    placeName: location.place_name
  }));
  return formattedLocations;
};

export default locationSearch;
