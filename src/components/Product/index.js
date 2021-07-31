import { Container, Info, ProductDisplay } from "./style";
import { useDispatch } from "react-redux";
import { addPurchaseThunk } from "../../store/modules/purchase/thunks";
import { FiPlus } from "react-icons/fi";

export const Product = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addPurchaseThunk(item));
  };
  return (
    <Container onClick={handleClick}>
      <ProductDisplay>
        <img src={item.api_featured_image} alt="produto" />
        <p className="purchaseAppear">
          <FiPlus size={15} />
          &nbsp; PURCHASE
        </p>
      </ProductDisplay>
      <Info className="info">
        <p className="name">{item.name}</p>
        <p className="price">{`$ ${item.price}`}</p>
      </Info>
    </Container>
  );
};
