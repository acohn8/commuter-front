interface StationType {
  id: string;
  name: string;
  address: string;
  distance: any;
  lines: [
    {
      id: string;
      name: string;
    },
    {
      id: string;
      name: string;
    }
  ];
}

export default StationType;
