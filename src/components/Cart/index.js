import { useSelector } from "react-redux";
import { CartItem } from "../CartItem";

export const Cart = () => {
  const purchase = useSelector((state) => state.purchase);
  return (
    <ul>
      {purchase.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      {console.log(purchase)}
    </ul>
  );
};
