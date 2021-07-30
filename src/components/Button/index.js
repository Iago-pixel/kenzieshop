import { Container } from "./style";

export const Button = ({ value, colors = "default", ...rest }) => {
  return (
    <Container>
      <button {...rest}>{value}</button>
    </Container>
  );
};
