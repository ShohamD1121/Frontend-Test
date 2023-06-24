import DropBox from "./components/DropBox/DropBox";
import Boxes from "./components/Boxes/Boxes";
import ItemList from "./components/ItemList/ItemList";
import { useAppDispatch } from "./store/store";
import { useEffect, useState } from "react";
import { fetchItems } from "./api/FetchItems";
import { setDropBoxItems } from "./redux/DropBoxItems";
import { CircularProgress } from "@mui/material";
import "./App.scss";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  // Fetching All the items from the api when App component is mounted
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const fetchedItems = await dispatch(fetchItems()).unwrap();
      dispatch(setDropBoxItems(fetchedItems)); // Setting The items state in the "items" State Slice
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // Loader that waits until the data is fetched from the server
  return isLoading ? (
    <div className="loading-container">
      <CircularProgress style={{ color: "cadetblue" }} size={80} />
    </div>
  ) : (
    <div className="app-container">
      <DropBox />
      <Boxes />
      <ItemList />
    </div>
  );
};

export default App;
