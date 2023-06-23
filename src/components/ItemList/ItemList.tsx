import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { sendItemList } from "../../api/SendItemList";
import "./ItemList.scss";

const ItemList: React.FC = () => {
  const itemList = useSelector((state: RootState) => state.itemList);
  const totalPrice = useSelector((state: RootState) => state.totalPrice);

  return (
    <div className="item-list-container">
      <hr className="section-divider" />
      <h2>Item list:</h2>
      <ul>
        {
          // Mapping the selected itemList in the item list section
          itemList.map((item, index) => (
            // making sure the key is uniqe as possibole for this case
            <li key={index + Math.random() * 2.3}>
              <div className="item">
                <span>
                  {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                </span>
                <hr className="item-divider" />
                <span>{item.amount}KG</span>
              </div>
            </li>
            // Also making sure the first letter of the item name will be Uppercase.
          ))
        }
      </ul>
      <h2>Total Price:</h2>
      <p>${totalPrice}</p>
      <button
        onClick={() => {
          sendItemList(itemList);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default ItemList;
