import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,*::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  
  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
}

:root {
  --bg-color: background-color: #8EC5FC;
  --bg-img: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);

}



`;
export default GlobalStyles;
