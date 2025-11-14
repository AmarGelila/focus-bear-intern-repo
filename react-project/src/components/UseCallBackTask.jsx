import { useCallback, useState } from "react";
import PrimaryButton from "./PrimaryButton";

function UseCallBackTask() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  const handleAddToList = useCallback(() => {
    if (item.trim() !== "") {
      setItems([...items, item]);
      setItem("");
    }
  }, [items, item]);

  return (
    <main>
      <form action="">
        <input
          type="text"
          name="ListItem"
          className="py-3 px-5 border border-blue-300 rounded-lg block mx-auto my-5 outline-blue-500 text-blue-700"
          placeholder="Enter a list item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </form>
      <PrimaryButton content="Add To Li st" handleClick={handleAddToList} />

      <div className="px-5 my-5">
        <ul>
          {items.map((item, index) => (
            <ListItem item={item} key={index} />
          ))}
        </ul>
      </div>
    </main>
  );
}

function ListItem({ item }) {
  return (
    <li className="border border-blue-300 py-3 px-5 text-blue-700">{item}</li>
  );
}
export default UseCallBackTask;
