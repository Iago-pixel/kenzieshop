import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .headerBar {
    height: 2.5rem;
    width: 100%;
    background-color: var(--pink);
  }
  img {
    margin: 1rem 0;
    border-radius: 100%;
    cursor: pointer;
  }
`;
