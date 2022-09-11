import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((store) => store.cart.quantity);
  return (
    <nav className="flex justify-between">
      <h3>Redux shopping</h3>
      <div className="icon">
        <p>CartIcon</p>
        <p>Quantity: {quantity}</p>
      </div>
    </nav>
  );
};
export default Navbar;
