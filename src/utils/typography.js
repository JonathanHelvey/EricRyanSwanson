import Typography from 'typography';
import altonTheme from 'typography-theme-alton';

altonTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  h1: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  'h1, h2,h3': {
    marginBottom: rhythm(1 / 2),
    marginTop: rhythm(2),
  },
});

const typography = new Typography(altonTheme);
altonTheme.baseFontSize = '24px'; // was 20px.


// const typography = new Typography({
//   baseFontSize: '18px',
//   baseLineHeight: 1.666,
//   googleFonts: [
//     // {
//     //   name: 'Montserrat',
//     //   styles: ['700'],
//     // },
//     {
//       name: 'Merriweather',
//       styles: ['400', '400i', '700', '700i'],
//     },
//   ],
//   headerFontFamily: [
//     // "Avenir Next",
//     'Helvetica Neue',
//     // 'Segoe UI',
//     // 'Helvetica',
//     // "Arial",
//     // "sans-serif",
//   ],
//   bodyFontFamily: ['Georgia', 'serif'],
// });

export default typography;
