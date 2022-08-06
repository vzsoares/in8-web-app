import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'RobotoRegular';
        src: url('./fonts/Roboto-Regular.woff2');
      }
      /* latin */
      @font-face {
        font-family: 'RobotoLight';
        src: url('./fonts/Roboto-Light.woff2');
        font-weight: 300;
      }
      /* latin */
      @font-face {
        font-family: 'HelveticaCondensed';
        src: url('./fonts/Helvetica-Condensed.woff2');
      }
      /* latin */
      @font-face {
        font-family: 'HelveticaUltraLt';
        src: url('./fonts/HelveticaNeue-UltraLight.woff2');
        font-weight: 200;
      }
      `}
  />
);

export default Fonts;
