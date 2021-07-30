import { Container } from "./style";
import { Button } from "../Button";
import { useDispatch } from "react-redux";
import { addPurchaseThunk } from "../../store/modules/purchase/thunks";

export const Product = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addPurchaseThunk(item));
  };
  return (
    <Container>
      <img src={item.api_featured_image} alt="produto" />
      <p className="name">{item.name}</p>
      <p className="price">{`$ ${item.price}`}</p>
      <Button value="Purchase" onClick={handleClick} />
    </Container>
  );
};
