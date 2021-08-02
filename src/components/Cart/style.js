import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 5px;
  display: ${({ itemInCart }) => (itemInCart ? "box" : "none")};
  position: relative;
  .header {
    background-color: var(--pink);
    padding: 1rem 0;
    h1 {
      text-align: center;
      font-size: 1rem;
      font-weight: lighter;
    }
  }
  .toCart {
    position: relative;
    text-align: center;
    height: 3rem;
    background-color: var(--pink);
    button {
      display: ${({ extended }) => (!extended ? "inital" : "none")};
      position: absolute;
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
      @media (min-width: 760px) {
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    button:hover {
      color: var(--darkpink);
    }
    p {
      position: absolute;
      font-weight: lighter;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      span {
        color: var(--darkpink);
        font-weight: normal;
      }
    }
  }
  .purchase {
    display: ${({ extended }) => (extended ? "inital" : "none")};
    position: absolute;
    right: 1rem;
    bottom: -3rem;
  }
`;

// TALVEZ APAGAR
export const Content = styled.ul``;

export const Extended = styled.div`
  display: ${({ extended }) => (extended ? "box" : "none")};
  .discounts {
    height: 8rem;
    padding: 1rem 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    label {
      display: none;
      font-size: 0.8rem;
      font-weight: 300;
      margin: 0 1.5rem;
      @media (min-width: 500px) {
        display: inline;
      }
    }
    .coupon {
      width: 100%;
      text-align: right;
      input {
        height: 3rem;
        width: 100%;
        border: 1px solid var(--grey);
        padding-left: 10px;
        ::placeholder {
          color: var(--grey);
        }
        input:focus {
          border-color: black;
        }
        @media (min-width: 500px) {
          width: 250px;
        }
      }
    }
    .depositOrPix {
      display: flex;
      align-items: center;
      > label {
        margin-right: 0;
        display: inline;
      }
    }
  }
`;
