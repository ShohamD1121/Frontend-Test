import React, { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Icons } from "../../constants/icons";
import "./DropBox.scss";

const DropBox: React.FC = () => {
  const [open, setOpen] = useState(false);
  const items = useSelector((state: RootState) => state.items);

  // Handling Opening and closing the DropBox
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropbox-container">
      <div
        className={`dropbox-button ${
          open ? "top_border_radius" : "full_border_radius" // handling the needing for a border radius change
        }`}
        onClick={handleOpen}
      >
        Select to add item to basket
        {open ? (
          <ArrowDropUpIcon fontSize="large" />
        ) : (
          <ArrowDropDownIcon fontSize="large" />
        )}
      </div>
      {open ? (
        <ul>
          {items.map((item, index) => {
            // Mapping all of the items one by one
            const Icon = Icons[index]; // Extracting the relevant icon according to the index of the array
            return (
              <li
                onClick={() => {}} // Here relevant actions will be dispatched
                key={item.id}
              >
                <div>
                  <span>{item.name}</span>
                  <hr />
                  <Icon size={25} />
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default DropBox;
