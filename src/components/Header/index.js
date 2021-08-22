import logo from "../../img/logo.jpg";
import { Container } from "./style";
import { useHistory } from "react-router";

export const Header = () => {
  const history = useHistory();
  const goHome = () => {
    history.push("./");
  };
  return (
    <Container id="top">
      <div className="headerBar"></div>
      <img src={logo} alt="logo" onClick={goHome} />
    </Container>
  );
};
