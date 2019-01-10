export interface Location {
  id: string;
  center?: number[];
  place_name: string;
}

export interface LocationQuery {
  locations: Location[];
  index: number;
  search: string | undefined;
  userLocation:
    | {
        center: number[];
      }
    | undefined;
}
