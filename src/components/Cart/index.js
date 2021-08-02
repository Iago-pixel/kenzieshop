import { useSelector } from "react-redux";
import { CartItem } from "../CartItem";
import { Container, Content, Extended } from "./style";
import { SimpleButton } from "../SimpleButton";
import { FiShoppingCart, FiChevronsRight } from "react-icons/fi";
import { useHistory } from "react-router";
import { useState } from "react";
import { Button } from "../Button";

export const Cart = ({ extended }) => {
  const history = useHistory();
  const purchase = useSelector((state) => state.purchase);

  const [percentage, setPercentage] = useState(1);

  const toCart = () => {
    history.push("/cart");
  };
  return (
    <Container itemInCart={!!purchase.length} extended={extended}>
      <div className="header">
        <h1>Cart</h1>
      </div>
      <Content>
        {purchase.map((item, index) => (
          <CartItem
            index={index}
            key={item.id}
            item={item}
            extended={extended}
          />
        ))}
      </Content>
      <Extended extended={extended}>
        <div className="discounts">
          <div className="coupon">
            <label for="coupon">Discount coupon:</label>
            <input id="coupon" placeholder="Coupon..." />
          </div>
          <div className="depositOrPix">
            <input
              id="depositOrPix"
              type="checkbox"
              onChange={(e) =>
                e.target.checked ? setPercentage(0.95) : setPercentage(1)
              }
            />
            <label for="depositOrPix">
              I want to pay with deposit/pix and have a 5% discount
            </label>
          </div>
        </div>
      </Extended>
      <div className="toCart">
        <SimpleButton
          icon={FiShoppingCart}
          icon2={FiChevronsRight}
          onClick={toCart}
        />
        <p>
          Total:{" "}
          <span>
            ${" "}
            {(
              purchase.reduce(
                (total, item) => total + Number(item.price) * item.count,
                0
              ) * percentage
            ).toFixed(2)}
          </span>
        </p>
      </div>
      <Button className="purchase" onClick={() => history.push("/inBuilding")}>
        Purchase
      </Button>
    </Container>
  );
};
