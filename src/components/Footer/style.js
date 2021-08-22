import styled from "styled-components";

export const Container = styled.footer`
  .register {
    background-color: var(--orange);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    padding: 10px;
    flex-direction: column;
    text-align: center;
    @media (min-width: 600px) {
      flex-direction: row;
    }
    .emailSymbol {
      display: none;
      @media (min-width: 1000px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        width: 50px;
        height: 50px;
        border: 1px solid white;
        margin-right: 50px;
      }
    }
    .registerEmailMessege {
      font-size: 1rem;
      margin-bottom: 1rem;
      @media (min-width: 600px) {
        margin-right: 50px;
        margin-bottom: 0;
      }
    }
    .registerEmail {
      display: flex;
      input {
        min-width: 200px;
        height: 2.5rem;
        width: 30vw;
        border: none;
        padding-left: 1rem;
        ::placeholder {
          color: var(--orange);
        }
      }
      button {
        height: 2.5rem;
        width: 100px;
        background-color: var(--pink);
        color: var(--orange);
        border: none;
      }
    }
  }
`;
