import { useState } from "react";

function Form() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  function handleAddToList() {
    console.log(item);
    console.log(items);

    setItems([...items, item]);
    setItem("");
  }
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
        <button
          type="button"
          className="px-3 py-1 border-2 mx-auto block border-blue-500 text-xl active:text-blue-300 transition-colors font-black rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white bg-white hover:cursor-pointer"
          onClick={handleAddToList}
        >
          Add To List
        </button>
      </form>

      <div className="px-5 my-5">
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className="border border-blue-300 py-3 px-5 text-blue-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Form;
