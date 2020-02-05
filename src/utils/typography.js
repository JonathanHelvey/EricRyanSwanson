import Typography from 'typography';
import kirkhamTheme from 'typography-theme-kirkham';

kirkhamTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  // h1: {
  //   fontFamily: ['Lobster'].join(','),
  // },
  'h1, h2,h3': {
    marginBottom: rhythm(1 / 2),
    marginTop: rhythm(2),
  },
});

const typography = new Typography(kirkhamTheme);
kirkhamTheme.baseFontSize = '24px'; // was 20px.
kirkhamTheme.headerFontFamily = 'lobster';


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
