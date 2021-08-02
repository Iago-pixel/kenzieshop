import { Container } from "./style";
import { Cart } from "../../components/Cart";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export const CartPage = () => {
  const purchase = useSelector((state) => state.purchase);
  if (!purchase.length) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <h1>My request</h1>
      <Cart extended />
      <div className="paddingBottom" />
    </Container>
  );
};
