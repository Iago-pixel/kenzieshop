import { SimpleButton } from "../SimpleButton";
import { Container } from "./style";
import { FiXCircle, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  removePurchase,
  updatePurchase,
} from "../../store/modules/purchase/actions";

export const CartItem = ({ item, index, extended }) => {
  const dispatch = useDispatch();

  const decrease = () => {
    if (item.count > 1) {
      item.count--;
      item.input = item.count;

      dispatch(updatePurchase(item));
    } else if (item.count <= 1) {
      dispatch(removePurchase(item));
    }
  };

  const increase = () => {
    item.count++;
    item.input = item.count;

    dispatch(updatePurchase(item));
  };

  const handleChange = (e) => {
    if (e.target.value <= 0 || isNaN(e.target.value)) {
      item.count = 0;
      item.input = e.target.value;
    } else {
      item.count = e.target.value;
      item.input = item.count;
    }
    dispatch(updatePurchase(item));
  };

  return (
    <Container isGrey={index % 2} extended={extended}>
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
      <div className="counter counterExtended">
        <SimpleButton icon={FiChevronsLeft} onClick={decrease} />
        <input value={item.input} onChange={handleChange} />
        <SimpleButton icon={FiChevronsRight} onClick={increase} />
      </div>
      <div className="prices">
        <div className="price">
          <p>Unit Price</p>
          <p>$ {item.price}</p>
        </div>
        <div className="price">
          <p>Price</p>
          <p className="featuredPrice">
            ${" "}
            {!isNaN(item.count) ? (item.count * item.price).toFixed(2) : "0.00"}
          </p>
        </div>
      </div>
    </Container>
  );
};
