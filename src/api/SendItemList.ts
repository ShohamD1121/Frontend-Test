import { ItemList } from "../redux/ItemList";

// send the ending itemList to the server, if successfull alert will be displayed with the message
export const sendItemList = async (itemList: ItemList[]) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemList),
  };

  try {
    const response = await fetch(
      "https://front-end-exam-dot-winky-apis.ew.r.appspot.com/products",
      requestOptions
    );
    const data = await response.json();
    alert(data.message);
    window.location.reload(); // just to reload the entire app state
  } catch (error) {
    console.error("Error:", error);
  }
};
