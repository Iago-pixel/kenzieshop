import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  background-color: ${(prop) => (prop.isGrey ? "var(--lightgrey)" : "white")};
  padding: 1rem 0;
  .purchaseDisplay {
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 2px;
    position: relative;
    margin: 0 1rem;
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
    img {
      width: 47px;
      height: 47px;
    }
  }
  .nameAndX {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 60vw;
    @media (min-width: 550px) {
      width: 300px;
    }
  }
  .name {
    font-size: 0.8rem;
    font-weight: 300;
    margin-bottom: 5px;
  }
  .counter {
    display: none;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    padding-left: 3rem;
    input {
      width: 2rem;
      height: 2rem;
      text-align: center;
      border: 1px solid black;
      border-radius: 8px;
      font-weight: 100;
      font-family: "Hahmlet", serif;
    }
    @media (min-width: 550px) {
      display: flex;
    }
  }
  .counterExtended {
    display: ${({ extended }) => (extended ? "flex" : "none")};
    width: 100%;
    @media (min-width: 550px) {
      display: flex;
      width: initial;
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
      p {
        font-size: 1rem;
        font-weight: lighter;
      }
      .featuredPrice {
        color: var(--darkpink);
        font-weight: normal;
      }
    }
  }
  .price + .price {
    margin: 0 6rem 0 3rem;
  }
`;
