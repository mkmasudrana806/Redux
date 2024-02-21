import { useDispatch, useSelector } from "react-redux";
import { filterBooks } from "../../redux/features/filterSlice";
import Books from "../books/Books";

const Main = () => {
  const dispatch = useDispatch();
  const { featured } = useSelector((state) => state.filters);

  // handle filter books based on all and featured books
  const handleFilter = (e, value) => {
    e.preventDefault();
    dispatch(filterBooks(value));
  };

  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>
          <div className="flex items-center space-x-4">
            <button
              onClick={(e) => handleFilter(e, false)}
              className={`lws-filter-btn ${featured ? "" : "active-filter"}`}
            >
              All
            </button>
            <button
              onClick={(e) => handleFilter(e, true)}
              className={`lws-filter-btn ${featured && "active-filter"}`}
            >
              Featured
            </button>
          </div>
        </div>
        <Books />
      </div>
    </main>
  );
};

export default Main;
