import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  figure {
    width: 50px;
  }
  img {
    width: 100%;
  }
  .nameAndX {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .name {
    font-size: 0.8rem;
  }
`;
