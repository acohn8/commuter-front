export interface LocationResponse {
  id: string;
  center: [number];
  place_name: string;
}

export interface FlattenedLocation {
  id: string;
  center: [number];
  placeName: string;
}
