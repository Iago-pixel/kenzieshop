import logo from "../../img/logo.jpg";
import { Container } from "./style";

export const Header = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
    </Container>
  );
};
