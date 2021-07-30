import { SimpleButton } from "../SimpleButton";
import { Container } from "./style";
import { FiXCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removePurchase } from "../../store/modules/purchase/actions";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <figure>
        <img src={item.api_featured_image} alt="produto" />
      </figure>
      <div className="nameAndX">
        <p className="name">{item.name}</p>
        <SimpleButton
          icon={FiXCircle}
          onClick={() => dispatch(removePurchase(item))}
        />
      </div>
    </Container>
  );
};
