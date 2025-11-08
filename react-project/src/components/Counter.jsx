// import { useState } from "react";

export default function Counter() {
  let counter = 0;
  return (
    <div className="text-center p-5">
      <h1 className="text-blue-500 font-bold mb-2">Current count: {counter}</h1>
      <button
        onClick={() => {
          counter++;
        }}
        className="px-3 py-1 border-2 border-blue-500 text-3xl font-black rounded-2xl text-blue-500 hover:bg-blue-500 hover:text-white bg-white hover:cursor-pointer"
      >
        +
      </button>
    </div>
  );
}
