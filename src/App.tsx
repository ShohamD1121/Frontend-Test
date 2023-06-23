import DropBox from "./components/DropBox/DropBox";
import Boxes from "./components/Boxes/Boxes";
import ItemList from "./components/ItemList/ItemList";
import { useAppDispatch } from "./store/store";
import { useEffect } from "react";
import { fetchItems } from "./api/FetchItems";
import { setItems } from "./redux/DropBoxItems";
import "./App.scss";

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
      <Boxes />
      <ItemList />
    </div>
  );
};

export default App;
