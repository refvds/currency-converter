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
  
  li {
    list-style: none;
  }
  
  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
}


button,a {
  cursor: pointer;
}

:root {
  --bg-color: background-color: #8EC5FC;
  --bg-img: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);

}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

`;
export default GlobalStyles;
