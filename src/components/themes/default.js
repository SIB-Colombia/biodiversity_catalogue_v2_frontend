import {reversePalette} from 'styled-theme/composer';

const Theme = {}

Theme.palette = {
  primary: ['#EF7748'],
  secondary: ['#009CB0'],
  option: ['white'],
  grayscale: [
    '#f2f2f2',
    '#e6e6e6',
    '#cccccc',
    '#b3b3b3',
    '#999999',
    '#666666',
    '#333333'
  ],
  basescale: [
    '#e2e7e7',
    '#59a8b7',
    '#498893',
    '#316971',
    '#00282b',
    '#e8774b',
    '#465252',
    '#f44336',
    '#ff9800',
    '#795548'
  ],
  text: ['#465252']
}

Theme.reversePalette = reversePalette(Theme.palette);

Theme.fonts = {
  primary: 'Open Sans, sans-serif',
  lg: '28pt',
  md: '22pt',
  sm: '18pt',
  xs: '16pt',
  text: '14pt'
}

Theme.icons = {
  small: '24px',
  large: '48px'
}

export default Theme;
