import { useDispatch, useSelector } from "react-redux";
import {
  decrementCartQuantity,
  deleteCartItem,
  incrementCartQuantity,
} from "../redux/billings/actions";
import {
  decrementQuantity,
  incrementQuantity,
} from "../redux/products/actions";

const AddedCart = ({ cart }) => {
  const { id, name, quantity, price, imageUrl, category } = cart;
  const products = useSelector((state) => state.products);
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  // handler to increment cart quantity
  const handleIncrementCartQuantity = (id, item) => {
    const productStatus = products.find((product) => product.id === id);
    if (productStatus.quantity > 0) {
      dispatch(incrementCartQuantity(item));
      dispatch(decrementQuantity(id));
    } else {
      console.log("product out of stock!");
    }
  };

  // handler to decrement quantity
  const handleDecrementCartQuantity = (id) => {
    const cartStatus = carts.find((c) => c.id === id);
    //if cart quantity not zero then dispatch decrement
    if (cartStatus.quantity > 0) {
      dispatch(decrementCartQuantity(id));
      dispatch(incrementQuantity(id, 1));
    } else {
      console.log("cart quantity 0!");
    }
  };

  // handle delete an item from the cart
  const handleDeleteItem = (id, item) => {
    dispatch(deleteCartItem(id));
    dispatch(incrementQuantity(id, item.quantity));
  };
  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={imageUrl} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{name}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleIncrementCartQuantity(id, cart)}
            className="lws-incrementQuantity"
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button
            onClick={() => handleDecrementCartQuantity(id)}
            className="lws-decrementQuantity"
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{quantity * price}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          onClick={() => handleDeleteItem(id, cart)}
          className="lws-removeFromCart"
        >
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default AddedCart;
