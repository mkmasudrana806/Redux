import { useGetAllBooksQuery } from "./redux/features/APISlice";

function App() {
  const { isLoading, data, isError } = useGetAllBooksQuery();
  console.log(data);
  return <div>hello world!</div>;
}

export default App;
