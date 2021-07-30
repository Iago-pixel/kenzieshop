import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  button {
    padding: 5px;
    background-color: white;
    border-radius: 8px;
    border: 2px solid black;
    width: 100%;

    :hover {
      background-color: lightpink;
      color: white;
      border-color: lightpink;
    }
  }
`;
