import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center p-5">
      <h1 className="text-blue-500 font-bold mb-5 text-5xl">
        Current count: {count}
      </h1>
      <PrimaryButton
        content="Plus 1"
        handleClick={() => setCount((prev) => prev + 1)}
      />
    </div>
  );
}
