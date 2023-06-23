import DropBox from "./components/DropBox/DropBox";
import "./App.scss";
import { useAppDispatch } from "./store/store";
import { useEffect } from "react";
import { fetchItems } from "./api/FetchItems";
import { setItems } from "./redux/Items";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  // Fetching All the items from the api when App component is mounted
  useEffect(() => {
    const fetchData = async () => {
      const fetchedItems = await dispatch(fetchItems()).unwrap();
      dispatch(setItems(fetchedItems)); // Setting The items state in the "items" State Slice
    };
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <DropBox />
    </div>
  );
};

export default App;
