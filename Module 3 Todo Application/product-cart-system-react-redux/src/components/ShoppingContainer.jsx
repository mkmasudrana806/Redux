import { useSelector } from "react-redux";
import AddedCart from "./AddedCart";
import BillDetails from "./BillDetails";

const ShoppingContainer = () => {
  const carts = useSelector((state) => state.carts);
  return (
    // <!-- Navbar ends -->
    <div>
      <div className="container 2xl:px-8 px-2 mx-auto">
        {carts.length > 0 ? (
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        ) : (
          <h2 className="mb-8 text-xl font-bold">No shipping added!</h2>
        )}
        <div className="cartListContainer">
          <div className="space-y-6">
            {/* <!-- Cart Item --> */}
            {carts?.map((cart) => (
              <AddedCart key={cart.id} cart={cart} />
            ))}
          </div>
          {/* <!-- Bill Details --> */}
          <BillDetails />
        </div>
      </div>
    </div>
  );
};

export default ShoppingContainer;
