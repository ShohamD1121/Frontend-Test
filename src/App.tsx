import DropBox from "./components/DropBox/DropBox";
import "./App.scss";
import { useAppDispatch } from "./store/store";
import { useEffect } from "react";
import { fetchItems } from "./api/FetchItems";
import { setItems } from "./redux/Items";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedItems = await dispatch(fetchItems()).unwrap();
      dispatch(setItems(fetchedItems));
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
