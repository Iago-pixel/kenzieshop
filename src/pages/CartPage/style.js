import styled from "styled-components";
import { appear } from "../../styles/global";

export const Container = styled.main`
  animation: ${appear} 0.4s;
  > h1 {
    font-weight: lighter;
    color: var(--orange);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .paddingBottom {
    height: 100px;
  }
`;
