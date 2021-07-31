import { Product } from "../Product";
import { useSelector } from "react-redux";
import { Container, Content, Title } from "./style";

export const ProductList = () => {
  const products = useSelector((state) => state.products);

  return (
    <Container>
      <Title>
        <h1>Best Products</h1>
      </Title>
      <Content>
        {products.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Content>
    </Container>
  );
};
