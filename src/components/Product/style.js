import styled, { keyframes } from "styled-components";

const pinksation = keyframes`
  from {
    background: transparent;
  }

  to {
    background: var(--pink);
`;
const appear = keyframes`
  from {
    bottom: -2rem;
  }

  to {
    bottom: 0;
  }
`;

export const Container = styled.li`
  cursor: pointer;
  text-align: center;
  width: 45vw;
  min-width: 158px;
  max-width: 400px;
  img {
    margin: 0 auto;
  }
  @media (min-width: 800px) {
    :hover .info {
      animation: ${pinksation} 0.4s linear;
      background: var(--pink);
      color: var(--orange);
      .price {
        color: var(--orange);
      }
    }
    :hover .purchaseAppear {
      animation: ${appear} 0.4s linear;
      bottom: 0rem;
    }
  }
`;

export const ProductDisplay = styled.div`
  position: relative;
  overflow: hidden;
  .purchaseAppear {
    position: absolute;
    bottom: -2rem;
    left: 0;
    width: 100%;
    opacity: 0.5;
    text-align: center;
    background-color: grey;
    color: white;
    font-weight: lighter;
  }
`;

export const Info = styled.div`
  border-radius: 0 0 8px 8px;
  height: 100px;
  padding-top: 1rem;
  .name {
    font-size: 0.8rem;
    margin: 0 0 1rem 0;
  }
  .price {
    color: var(--darkpink);
  }
`;
