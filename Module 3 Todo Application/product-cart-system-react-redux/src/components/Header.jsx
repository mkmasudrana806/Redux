import { useSelector } from "react-redux";
import logo from "../assets/logo.png";

const Header = ({ routeHandler }) => {
  const carts = useSelector((state) => state.carts);
  const totalAdded = carts.reduce((count, cart) => cart.quantity + count, 0);

  return (
    // <!-- Navbar -->
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <a
            onClick={(e) => routeHandler(e, "home")}
            href="#home"
            className="navHome"
            id="lws-home"
          >
            {" "}
            Home{" "}
          </a>
          <a
            onClick={(e) => routeHandler(e, "productBilling")}
            href="cart.html"
            className="navCart"
            id="lws-cart"
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{totalAdded}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
