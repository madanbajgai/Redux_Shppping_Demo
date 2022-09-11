import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Remove all items from your shopping cart </h4>
      <div>
        <button
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          Confirm
        </button>
        <button
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default Modal;
