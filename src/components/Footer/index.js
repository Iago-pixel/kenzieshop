import { FiMail } from "react-icons/fi";
import { Container } from "./style";

export const Footer = () => {
  return (
    <Container>
      <section className="register">
        <div className="emailSymbol">
          <FiMail />
        </div>
        <p className="registerEmailMessege">
          REGISTER AND RECEIVE OUR PROMOTIONS AND NEWS!
        </p>
        <div className="registerEmail">
          <input placeholder="Enter your E-mail..." />
          <button>REGISTER</button>
        </div>
      </section>
    </Container>
  );
};
