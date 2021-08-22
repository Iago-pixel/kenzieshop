import { createGlobalStyle, keyframes } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --darkpink: #e9959d;
    --pink: #fce8cf;
    --orange: #fbbd5a;
    --grey:#ddd;
    --lightgrey: #F7F7F7;
}

.App{
    max-width:1440px;
    margin: 0 auto;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}

ul{
    list-style: none;
}
`;

export const appear = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}
`;
