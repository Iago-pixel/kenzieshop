import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --darkpink: #e591c2;
    --pink: #FCE7F3;
    --orange: rgb(216, 153, 52);
    --grey:#ddd;
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
