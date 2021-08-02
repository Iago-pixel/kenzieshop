import { Container } from "./style";

export const Button = ({ children, ...rest }) => {
  return (
    <Container>
      <button {...rest}>{children}</button>
    </Container>
  );
};
