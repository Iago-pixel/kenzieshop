import styled from "styled-components";

export const Container = styled.div`
  button {
    background-color: transparent;
    border: 3px solid black;
    font-size: 0.8rem;
    font-weight: 300;
    padding: 10px 1.5rem;
    :hover {
      color: var(--darkpink);
      border-color: var(--darkpink);
    }
  }
`;
