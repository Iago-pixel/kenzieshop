import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  position: relative;
  .purchaseDisplay {
    position: relative;
    span {
      font-size: 1.5rem;
      color: white;
      background-color: var(--grey);
      position: absolute;
      left: 0;
      bottom: 0;
      @media (min-width: 550px) {
        display: none;
      }
    }
  }
  img {
    width: 50px;
    height: 50px;
  }
  .nameAndX {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media (min-width: 550px) {
      width: 300px;
    }
  }
  .name {
    font-size: 0.8rem;
  }
  .counter {
    display: none;
    @media (min-width: 550px) {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 3rem;
      span {
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        border-radius: 8px;
      }
    }
  }
  .prices {
    display: flex;
    position: absolute;
    right: 0;
  }
  .price {
    display: none;
    @media (min-width: 850px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .price + .price {
    margin: 0 6rem 0 3rem;
  }
`;
