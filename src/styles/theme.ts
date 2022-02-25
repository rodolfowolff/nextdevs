export default {
  color: {
    primary: '#FE8D79', //07DAC0
    secondary: '#FF5276', //CE2380
    lightBlue: '#A4DBFF',
    blue: '#36A5F0',
    turquoise: '#00BEC5',
    white: '#F3F3F3',
    black: '#1C252E',
    dark: '#121214',
    gray: '#D6DFE0',
    darkGray: '#4D4D4D',
  },
  font: {
    weight: {
      normal: 400,
      md: 500,
      bd: 600,
    },
    familyHeading: 'Lexend Deca, sans-serif',
    familyBody: 'Inter, sans-serif',
    size: {
      xsm: '0.6rem',
      sm: '0.8rem',
      md: '1rem',
      lg: '1.4rem',
      xlg: '1.8rem',
      xxlg: '2.2rem',
      huge: '3rem',
    },
  },
  spacing: {
    xsm: '0.6rem',
    sm: '1.0rem',
    md: '1.8rem',
    lg: '2.6rem',
    xlg: '3.2rem',
  },
  border: {
    radius: '0.8rem',
  },
  transitionTime: '0.8s',
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  lineargradient: {
    primary: 'linear-gradient(to bottom right, #FE8D79, #FF5276)',
    secondary: 'linear-gradient(to bottom right, #7EBDC2, #36A5F0)',
    text: 'linear-gradient(to top right,#ff5276,#fe8d79)',
  },
  boxShadow: {
    primary: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
} as const
