import { ProductList } from "../../components/ProductList";
import { Cart } from "../../components/Cart";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <Cart />
      <ProductList />
    </Container>
  );
};
