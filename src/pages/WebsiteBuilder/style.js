import styled from "styled-components";
import { appear } from "../../styles/global";

export const Container = styled.div`
  animation: ${appear} 0.4s;
  text-align: center;
  h1 {
    color: var(--orange);
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
