interface Colors {
  background: string;
  darkHeader: string;
  subheader: string;
  mainText: string;
  metro: { [line: string]: string };
}

const colors: Colors = {
  background: 'hsl(0, 0%, 97%)',
  darkHeader: 'hsl(0, 0%, 38%)',
  subheader: 'hsl(0, 0%, 69%)',
  mainText: 'hsl(0, 0%, 49%)',
  metro: {
    RD: '#CD142B',
    OR: '#F18001',
    SV: '#A1A59F',
    BL: '#005EC3',
    YL: '#FBC816',
    GR: '#009545'
  }
};

export default colors;
