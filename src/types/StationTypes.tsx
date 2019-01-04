interface StationType {
  id: string;
  name: string;
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
