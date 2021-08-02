import webBuild from "../../img/website_builder.svg";
import { Container } from "./style";

export const WebsiteBuilder = () => {
  return (
    <Container>
      <h1>Website in building</h1>
      <img src={webBuild} alt="drawing of website in build" />
    </Container>
  );
};
