import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  googleFonts: [
    // {
    //   name: "Montserrat",
    //   styles: ["700"],
    // },
    {
      name: 'Merriweather',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerFontFamily: [
    // "Avenir Next",
    // "Helvetica Neue",
    // "Segoe UI",
    'Helvetica',
    // "Arial",
    // "sans-serif",
  ],
  bodyFontFamily: ['Georgia', 'serif'],
})

export default typography
