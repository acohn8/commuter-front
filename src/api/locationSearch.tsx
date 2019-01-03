const locationSearch = async (query: string) => {
  const locationResponse = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${
      process.env.REACT_APP_MAPBOX_KEY
    }&country=us&proximity=-77.0366%2C%2038.895&autocomplete=true&language=`
  );
  const parsedResponse = await locationResponse.json();
  console.log(parsedResponse);
  return parsedResponse.features;
};

export default locationSearch;
