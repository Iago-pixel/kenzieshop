import { Product } from "../Product";
import { useSelector } from "react-redux";
import { Container } from "./style";

export const ProductList = () => {
  const products = useSelector((state) => state.products);

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};
