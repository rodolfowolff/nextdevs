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
      xsm: '0.8rem',
      sm: '1rem',
      md: '1.2rem',
      lg: '1.6rem',
      xlg: '2.2rem',
      xxlg: '2.8rem',
      huge: '3.3rem',
    },
  },
  spacing: {
    xsm: '0.6rem',
    sm: '1.4rem',
    md: '2.2rem',
    lg: '3.0rem',
    xlg: '3.8rem',
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
    secondary: 'linear-gradient(to bottom right, #A4DBFF, #36A5F0)',
    text: 'linear-gradient(to top right,#ff5276,#fe8d79)',
  },
  boxShadow: {
    primary: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
} as const
