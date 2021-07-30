import styled from "styled-components";

export const Container = styled.li`
  text-align: center;
  width: 45vw;
  min-width: 158px;
  max-width: 400px;
  img {
    margin: 0 auto;
  }
  p {
    margin-bottom: 5px;
  }
  .name {
    font-size: 0.8rem;
    font-weight: bold;
  }
  .price {
    color: var(--darkpink);
  }
`;
