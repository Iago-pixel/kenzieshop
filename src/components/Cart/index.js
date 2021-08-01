import { useSelector } from "react-redux";
import { CartItem } from "../CartItem";
import { Container, Content } from "./style";
import { SimpleButton } from "../SimpleButton";
import { FiShoppingCart, FiChevronsRight } from "react-icons/fi";
import { useHistory } from "react-router";

export const Cart = () => {
  const history = useHistory();
  const purchase = useSelector((state) => state.purchase);
  const toCart = () => {
    history.push("/cart");
  };
  return (
    <Container itemInCart={!!purchase.length}>
      <div className="header">
        <h1>CART</h1>
      </div>
      <Content>
        {purchase.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </Content>
      <div className="toCart">
        <SimpleButton
          icon={FiShoppingCart}
          icon2={FiChevronsRight}
          onClick={toCart}
        />
        <span>
          TOTAL: $
          {purchase
            .reduce((total, item) => total + Number(item.price) * item.count, 0)
            .toFixed(2)}
        </span>
      </div>
    </Container>
  );
};
