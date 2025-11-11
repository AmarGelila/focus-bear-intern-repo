import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center p-5">
      <h1 className="text-blue-500 font-bold mb-5 text-5xl">
        Current count: {count}
      </h1>
      <Button
        content="Plus 1"
        handleClick={() => setCount((prev) => prev + 1)}
      />
    </div>
  );
}

function Button({ content, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="px-3 py-1 border-2 border-blue-500 text-1xl active:text-blue-300 transition-colors font-black rounded-2xl text-blue-500 hover:bg-blue-500 hover:text-white bg-white hover:cursor-pointer"
    >
      {content}
    </button>
  );
}
