import React, { useEffect, useState } from "react";
import Box from "../Box/Box";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./Boxes.scss";

const Boxes: React.FC = () => {
  const boxesItems = useSelector((state: RootState) => state.boxesItems);
  const [isAlertShown, setIsAlertShown] = useState(false); // making sure alert only shown one time for user comfort

  // Every time the boxesItems state changes we check if items are
  // out of stock, if so sending an alert.
  useEffect(() => {
    const outOfStockItems = boxesItems.filter((item) => !item.stock);
    if (outOfStockItems.length > 0 && !isAlertShown) {
      const itemNames = outOfStockItems.map((item) => item.name).join(", ");
      alert(`Sorry, the following items are not in stock: ${itemNames}`);
      setIsAlertShown(true);
    }
  }, [boxesItems]);

  return (
    <div className="boxes_container">
      {boxesItems.map((item, index) => (
        // Mapping all of the Boxes in the grid container
        <Box key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Boxes;
