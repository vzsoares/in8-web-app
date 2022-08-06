import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'RobotoRegular';
        src: url('./fonts/Roboto-Regular_0.ttf');
      }
      /* latin */
      @font-face {
        font-family: 'RobotoLight';
        src: url('./fonts/Roboto-Light_0.ttf');
      }
      /* latin */
      @font-face {
        font-family: 'ps';
        src: url('./fonts/ps.ttf');
      }
      /* latin */
      @font-face {
        font-family: 'HelveticaUltraLt';
        src: url('./fonts/HelveticaUltraLt_0.ttf');
      }
      `}
  />
);

export default Fonts;
