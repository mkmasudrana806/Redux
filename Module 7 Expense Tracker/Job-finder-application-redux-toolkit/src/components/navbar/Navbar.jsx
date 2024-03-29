import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <Link
      to="/"
      className="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0"
    >
      <img src={logo} />
    </Link>
  );
};

export default Navbar;
