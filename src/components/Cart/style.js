import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 5px;
  .header {
    display: ${({ itemInCart }) => (itemInCart ? "box" : "none")};
    background-color: var(--orange);
    padding: 5px 0;
    h1 {
      text-align: center;
      font-size: 1rem;
      color: white;
    }
  }
  .toCart {
    position: relative;
    display: ${({ itemInCart }) => (itemInCart ? "box" : "none")};
    text-align: center;
    font-weight: bold;
    button:hover {
      color: var(--orange);
    }
    span {
      position: absolute;
      right: 0;
    }
  }
`;

export const Content = styled.ul`
  li + li {
    padding-top: 4px;
    border-top: 1px solid black;
  }
`;
