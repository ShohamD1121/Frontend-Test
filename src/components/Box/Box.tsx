import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useAppDispatch } from "../../store/store";
import { icons } from "../../constants/icons";
import { Item } from "../../constants/types";
import { removeItemFromBoxesItems } from "../../redux/BoxesItems";
import { addItemToDropBoxItems } from "../../redux/DropBoxItems";
import {
  addItemToItemList,
  removeItemFromItemList,
  updateQuantityOfItem,
} from "../../redux/ItemList";
import {
  addToTotalPrice,
  subtractFromTotalPrice,
} from "../../redux/TotalPrice";
import "./Box.scss";

interface Props {
  item: Item;
}

const Box: React.FC<Props> = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const [totalPriceOfItem, setTotalPriceOfItem] = useState(0);
  const dispatch = useAppDispatch();
  const Icon = icons[item.name];

  // Adding the item to the ItemList when Box is Mounted
  useEffect(() => {
    dispatch(addItemToItemList({ id: item.id, amount: quantity }));
  }, []);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handling Change in Quantity Progress Bar
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    dispatch(updateQuantityOfItem({ id: item.id, amount: newQuantity }));

    const priceDifference = (newQuantity - quantity) * item.price; // variable to indicate wether price should be increased or decreased
    if (priceDifference > 0) {
      dispatch(addToTotalPrice(priceDifference)); // Add to the total price
    } else if (priceDifference < 0) {
      dispatch(subtractFromTotalPrice(-priceDifference)); // Subtract from the total price
    }

    setTotalPriceOfItem((prev) => prev + priceDifference);
  };

  return (
    <div className="box-container">
      <div className="box-title">
        <h1
          style={{
            backgroundColor: item.color === "Yellow" ? "#FFD95A" : item.color, // needed a darker yellow color
          }}
        >
          <Icon />
          <span>{item.name}</span>
        </h1>
        <button
          onClick={() => {
            dispatch(removeItemFromBoxesItems(item.id));
            dispatch(removeItemFromItemList(item.id));
            dispatch(addItemToDropBoxItems(item));
            dispatch(subtractFromTotalPrice(totalPriceOfItem));
          }} // Remove item from Boxes, ItemList, and move it back to DropBox, also remove it's price from the totalPrice of the item list
        >
          <AiOutlineCloseCircle size={25} />
        </button>
      </div>
      <div className="box-select">
        <p>Select quantity:</p>
        <div>
          <h5 className={`${!item.stock ? "not-in-stock" : ""}`}>{quantity}</h5>
          <h6>KG</h6>
        </div>
      </div>
      <input
        type="range"
        min="0"
        max={item.stock}
        step="1"
        value={quantity}
        onChange={handleQuantityChange}
        className="progress-bar"
      />
      <h2>
        Price:{" "}
        <span className={`${!item.stock ? "not-in-stock" : ""}`}>
          {quantity * item.price}$
        </span>
      </h2>
    </div>
  );
};

export default Box;
