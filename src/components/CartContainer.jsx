import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
import CartItem from "./CartItem";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, quantity } = useSelector((store) => store.cart);
  if (quantity < 1) {
    return (
      <section>
        <h2>Your bag</h2>
        <h4>is currently empty.</h4>
      </section>
    );
  }

  return (
    <section>
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <h4>
          Total: <span>${total.toFixed(2)}</span>
        </h4>
        <button
          onClick={() => dispatch(openModal())}
          className="border border-red-600 p-2 rounded-md m-3"
        >
          Clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
