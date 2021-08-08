import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 760px) {
    flex-direction: row;
    flex-wrap: wrap;
    .greyDivs {
      flex: 50%;
    }
    .whiteDiv {
      flex: 100%;
    }
  }
  .greyDivs {
    height: 100px;
    background-color: var(--lightgrey);
    border: 2px solid var(--grey);

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;

    label {
      font-size: 0.8rem;
    }
  }
  .greyDivs + .greyDivs {
    border-top: none;
    justify-content: flex-end;
    @media (min-width: 760px) {
      border-top: 2px solid var(--grey);
      border-left: none;
    }
  }
  .label p {
    font-size: 0.8rem;
    padding-right: 1rem;
    text-align: right;
  }
  .sendMethods {
    display: flex;
    flex-direction: column;
    .divRadio {
      margin: 0;
      input {
        cursor: pointer;
        margin-right: 5px;
      }
      label {
        cursor: pointer;
      }
      margin: 5px 1rem;
    }
  }
  .cepInput {
    font-size: 0.9rem;
    label {
      text-align: right;
      width: 20%;
    }
    input {
      margin-left: 1rem;
      padding-left: 10px;
      height: 2.5rem;
      width: 80%;
      max-width: 400px;
      background-color: transparent;
      border: 1px solid var(--grey);
      ::placeholder {
        color: var(--grey);
      }
    }
  }
  .whiteDiv {
    height: 100px;
    border: 2px solid var(--grey);
    border-top: none;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    > div + div {
      box-shadow: 2px 2px 2px;
      :hover {
        box-shadow: 2px 2px 2px 1px;
      }
    }

    > div + div button {
      border: none;
      background-color: var(--pink);
      color: var(--orange);
      font-size: 1.2rem;
      display: flex;
      align-items: center;
    }
  }
`;
