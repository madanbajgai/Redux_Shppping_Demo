import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../features/cart/cartSlice";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex bg-red-200 px-5 py-3 items-center justify-between">
      <img className="h-20" src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4>Total price ${price * amount}</h4>
        <button onClick={() => dispatch(removeItem(id))} className="bg-red-600">
          Remove
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(increaseQuantity(id));
          }}
          className="bg-red-600 "
        >
          ^
        </button>
        <p>{amount}</p>
        <button
          onClick={() => {
            if (amount === 0) {
              return;
            }
            dispatch(decreaseQuantity(id));
          }}
          className="bg-red-600 "
        >
          v
        </button>
      </div>
    </div>
  );
};
export default CartItem;
