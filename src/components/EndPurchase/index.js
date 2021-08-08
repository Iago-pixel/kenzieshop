import { Container } from "./style";
import { Button } from "../Button";
import { useHistory } from "react-router";
import { FiCheck } from "react-icons/fi";

export const EndPurchase = () => {
  const history = useHistory();
  return (
    <Container>
      <div className="send greyDivs">
        <div className="label">
          <p>Shipping method:</p>
        </div>
        <div className="sendMethods">
          <div className="divRadio">
            <input id="defaultSend" type="radio" name="sendMethod" />
            <label for="defaultSend">Default</label>
          </div>
          <div className="divRadio">
            <input id="inNewYork" type="radio" name="sendMethod" />
            <label for="inNewYork">Withdraw in person in New York</label>
          </div>
        </div>
      </div>
      <div className="cepInput greyDivs">
        <label>ZIP CODE:</label>
        <input placeholder="Zip code..." />
      </div>
      <div className="whiteDiv">
        <Button onClick={() => history.push("/")}>Choose more products</Button>
        <Button onClick={() => history.push("/inBuilding")}>
          <FiCheck />
          &nbsp;CHECKOUT
        </Button>
      </div>
    </Container>
  );
};
