import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useAppDispatch } from "../../store/store";
import { Icons } from "../../constants/icons";
import { Item } from "../../constants/types";
import { removeItemFromBoxesItems } from "../../redux/BoxesItems";
import { addItemToDropBoxItems } from "../../redux/DropBoxItems";
import "./Box.scss";

interface Props {
  item: Item;
  index: number;
}

const Box: React.FC<Props> = ({ item, index }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useAppDispatch();
  const Icon = Icons[index];

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handling Change in Quantity Progress Bar
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
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
            dispatch(addItemToDropBoxItems(item));
          }} // Remove item from Boxes, and move it back to DropBox
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
