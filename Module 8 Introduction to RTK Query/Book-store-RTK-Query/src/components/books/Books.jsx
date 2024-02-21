import BookCart from "./BookCart";
import { useGetAllBooksQuery } from "../../redux/features/APISlice";
import { useSelector } from "react-redux";

const Books = () => {
  const { data: books, isLoading, isError, isSuccess } = useGetAllBooksQuery();
  const { search, featured } = useSelector((state) => state.filters);

  // show filtered books: based on search and filter conditions
  const filteredBooks = books?.filter((book) => {
    const searchMatch = search
      ? book.name.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
      : true;
    const filterMatch = featured ? book.featured === true : true;
    return searchMatch && filterMatch;
  });

  // decide what to renders
  let content = null;
  if (isLoading) content = <p>Loading...</p>;
  if (!isLoading && isError) content = <p>There was an error</p>;
  if (isSuccess && filteredBooks?.length === 0)
    content = <p>There were Books available </p>;
  if (isSuccess && filteredBooks?.length >= 0)
    content = filteredBooks.map((book) => (
      <BookCart book={book} key={book.id} />
    ));

  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
};

export default Books;
