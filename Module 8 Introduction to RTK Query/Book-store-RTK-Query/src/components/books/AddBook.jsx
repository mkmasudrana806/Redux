import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddBookMutation,
  useGetBookQuery,
  useUpdateBookMutation,
} from "../../redux/features/APISlice";

const AddBook = () => {
  const { id } = useParams();
  const { data: singleBook } = useGetBookQuery(id, {
    skip: !id,
  });

  const [addBook, { isError, isSuccess }] = useAddBookMutation();
  const [updateBook] = useUpdateBookMutation();

  const navigate = useNavigate();
  const initialState = {
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  };
  const [book, setBook] = useState(initialState);

  // load form with the specific book
  useEffect(() => {
    setBook((prev) => ({ ...prev, ...singleBook }));
  }, [singleBook]);

  // add or update a book
  const addBookAndUpdate = (e) => {
    e.preventDefault();
    if (!id) {
      addBook(book);
    } else {
      updateBook({ id, data: { ...book } });
      navigate("/");
    }
  };

  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">
            {id ? "Update This Book" : "Add new book"}
          </h4>
          <form className="book-form">
            <div className="space-y-2">
              <label htmlFor="lws-bookName">Book Name</label>
              <input
                value={book.name}
                onChange={(e) => setBook({ ...book, name: e.target.value })}
                required
                className="text-input"
                type="text"
                id="lws-bookName"
                name="name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-author">Author</label>
              <input
                value={book.author}
                onChange={(e) => setBook({ ...book, author: e.target.value })}
                required
                className="text-input"
                type="text"
                id="lws-author"
                name="author"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-thumbnail">Image Url</label>
              <input
                value={book.thumbnail}
                onChange={(e) =>
                  setBook({ ...book, thumbnail: e.target.value })
                }
                required
                className="text-input"
                type="text"
                id="lws-thumbnail"
                name="thumbnail"
              />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <label htmlFor="lws-price">Price</label>
                <input
                  value={book.price}
                  onChange={(e) => setBook({ ...book, price: e.target.value })}
                  required
                  className="text-input"
                  type="number"
                  id="lws-price"
                  name="price"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lws-rating">Rating</label>
                <input
                  value={book.rating}
                  onChange={(e) => setBook({ ...book, rating: e.target.value })}
                  required
                  className="text-input"
                  type="number"
                  id="lws-rating"
                  name="rating"
                  min="1"
                  max="5"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                checked={book.featured}
                onChange={(e) =>
                  setBook({ ...book, featured: e.target.checked })
                }
                id="lws-featured"
                type="checkbox"
                name="featured"
                className="w-4 h-4"
              />
              <label htmlFor="lws-featured" className="ml-2 text-sm">
                {" "}
                This is a featured book{" "}
              </label>
            </div>
            <button
              onClick={addBookAndUpdate}
              type="submit"
              className="submit"
              id="lws-submit"
            >
              {id ? "Update" : "Submit"}
            </button>
          </form>
          {isSuccess && <p>Book Added Successfull</p>}
          {isError && <p>There was an error to add new book!</p>}
        </div>
      </div>
    </main>
  );
};

export default AddBook;
