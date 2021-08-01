import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.div`
  position: relative;
  height: 1rem;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    top: 0.5rem;
    left: 0;
    background: var(--grey);
  }
  h1 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    width: 150px;
    text-align: center;
    font-size: 0.9rem;
    font-weight: normal;
    color: var(--orange);
  }
`;

export const Content = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  @media (min-width: 850px) {
    justify-content: space-between;
  }
`;
