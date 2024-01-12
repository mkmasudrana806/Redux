import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products/actions";

const AddProduct = () => {
  const dispatch = useDispatch();
  // form state
  const productInit = {
    name: "",
    category: "",
    imageUrl: "",
    price: "",
    quantity: "",
  };
  const [product, setProduct] = useState(productInit);

  // add new product handler
  const handleAddProduct = (event) => {
    event.preventDefault();
    dispatch(addProduct(product));
    // setProduct(productInit); // reset product form field
  };
  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          onSubmit={handleAddProduct}
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
        >
          {/* <!-- product name --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              required
              value={product.name}
              onChange={(e) =>
                setProduct((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          {/* <!-- product category --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
              value={product.category}
              onChange={(e) =>
                setProduct((prev) => ({ ...prev, category: e.target.value }))
              }
            />
          </div>
          {/* <!-- product image url --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              required
              value={product.imageUrl}
              onChange={(e) =>
                setProduct((prev) => ({ ...prev, imageUrl: e.target.value }))
              }
            />
          </div>
          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
                value={product.price}
                onChange={(e) =>
                  setProduct((prev) => ({ ...prev, price: e.target.value }))
                }
              />
            </div>
            {/* <!-- quantity --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
                value={product.quantity}
                onChange={(e) =>
                  setProduct((prev) => ({ ...prev, quantity: e.target.value }))
                }
              />
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
      {/* <!-- Product Input Form Ends --> */}
    </div>
  );
};

export default AddProduct;
