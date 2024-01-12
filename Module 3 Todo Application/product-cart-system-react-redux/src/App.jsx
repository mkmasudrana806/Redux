import { useState } from "react";
import "./App.css";
import AddProduct from "./components/AddProduct";
import Header from "./components/Header";
import ProductsContainer from "./components/ProductsContainer";
import ShoppingContainer from "./components/ShoppingContainer";
import { useSelector } from "react-redux";

function App() {
  const [activeComponent, setActiveComponent] = useState("home");
  // switch route
  const routeHandler = (e, route) => {
    e.preventDefault();
    setActiveComponent(route);
  };

  return (
    <div>
      {/* Navbar  */}
      <Header routeHandler={routeHandler} />
      <main className="py-16">
        <div className="productWrapper">
          {activeComponent === "home" && (
            <>
              <ProductsContainer />
              <AddProduct />
            </>
          )}
        </div>
        {activeComponent === "productBilling" && <ShoppingContainer />}
      </main>
    </div>
  );
}

export default App;
