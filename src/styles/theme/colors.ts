// export const colorsDark = {
//   elements: {
//     background: '#16161a',
//     headline: '#fffffe',
//     paragraph: '#94a1b2',
//     button: '#ff8906',
//     buttonText: '#fffffe',
//   },
//   illustration: {
//     stroke: '#131313',
//     highlight: '#ff8906',
//     main: '#fffffe',
//     secondary: '#72757e',
//     tertiary: '#e53170',
//   },
// };
const commonColors = {
  white: '#ffffff',
  black: '#000000',
  red: '#ef5350',
  warn: '#ff9800',
  success: '#4caf50',
  info: '#03a9f4',
  blue: '#2e9bf8',
  pink: '#ff4181',
} as const;

export const colors = {
  background: '#16161a',
  background_light: '#1f1f24',
  main: '#fffffe',
  subtitle: '#a7a9be',
  paragraph: '#d7d7d7',
  secondary: '#f25f4c',
  tertiary: '#e53170',
  lockedInput: '#777777',
  highlight: '#ff8906',
  ...commonColors,
} as const;
