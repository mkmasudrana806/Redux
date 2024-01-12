import { useSelector } from "react-redux";
import ProductCart from "./ProductCart";

const ProductsContainer = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="productContainer" id="lws-productContainer">
      {products.map((product) => (
        <ProductCart key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
