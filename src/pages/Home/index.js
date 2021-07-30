import { ProductList } from "../../components/ProductList";
import { Cart } from "../../components/Cart";

export const Home = () => {
  return (
    <div>
      <Cart />
      <ProductList />
    </div>
  );
};
