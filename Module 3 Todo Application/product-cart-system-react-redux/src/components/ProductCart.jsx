import { useDispatch } from "react-redux";
import { decrementQuantity } from "../redux/products/actions";
import { incrementCartQuantity } from "../redux/billings/actions";

const ProductCart = ({ product }) => {
  const { id, name, category, price, quantity, imageUrl } = product;
  const dispatch = useDispatch();

  // handle add to cart and decrement product quantity
  const handleAddToCart = (id, item) => {
    dispatch(decrementQuantity(id));
    dispatch(incrementCartQuantity(item));
  };
  return (
    <>
      {/* <!-- product item --> */}
      <div className="lws-productCard">
        <img className="lws-productImage" src={imageUrl} alt="product" />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">{name}</h4>
          <p className="lws-productCategory">{category}</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price">{price}</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity">{quantity}</span>
            </p>
          </div>
          <button
            onClick={() => handleAddToCart(id, product)}
            disabled={quantity === 0 && true}
            className="lws-btnAddToCart"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
