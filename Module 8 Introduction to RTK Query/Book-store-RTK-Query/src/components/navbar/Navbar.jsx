import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useDispatch } from "react-redux";
import { searchBooks } from "../../redux/features/filterSlice";
import { useState } from "react";
const Navbar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  // handle search books
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setTimeout(() => {
      dispatch(searchBooks(search));
    }, 1000);
  };
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} width="150px" className=" object-contain" />
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <NavLink
            to={"/"}
            className="activeNav cursor-pointer"
            id="lws-bookStore"
          >
            <li>Book Store</li>
          </NavLink>
          <NavLink
            to="/addBook"
            className="activeNav cursor-pointer"
            id="lws-addBook"
          >
            <li>Add Book</li>
          </NavLink>
        </ul>

        <form className="flex items-center">
          <div className="group relative rounded-md bg-white">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Filter books..."
              className="search"
              id="lws-search"
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
