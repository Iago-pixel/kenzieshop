import { SimpleButton } from "../SimpleButton";
import { Container } from "./style";
import { FiXCircle, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  removePurchase,
  updatePurchase,
} from "../../store/modules/purchase/actions";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const decrease = () => {
    if (item.count > 1) {
      item.count--;
      dispatch(updatePurchase(item));
    } else if (item.count === 1) {
      dispatch(removePurchase(item));
    }
  };
  const increase = () => {
    item.count++;
    dispatch(updatePurchase(item));
  };
  return (
    <Container>
      <div className="purchaseDisplay">
        <img src={item.api_featured_image} alt="produto" />
        <span>{item.count}</span>
      </div>
      <div className="nameAndX">
        <p className="name">{item.name}</p>
        <SimpleButton
          icon={FiXCircle}
          onClick={() => dispatch(removePurchase(item))}
        />
      </div>
      <div className="counter">
        <SimpleButton icon={FiChevronsLeft} onClick={decrease} />
        <span>{item.count}</span>
        <SimpleButton icon={FiChevronsRight} onClick={increase} />
      </div>
      <div className="prices">
        <div className="price">
          <p>UNIT PRICE</p>
          <p>$ {item.price}</p>
        </div>
        <div className="price">
          <p>PRICE</p>
          <p>$ {(item.count * item.price).toFixed(2)}</p>
        </div>
      </div>
    </Container>
  );
};
