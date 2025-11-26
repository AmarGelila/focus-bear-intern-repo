import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  increment,
  decrement,
  addByAmount,
  reset,
  selectCount,
} from "./counterSlice";

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(3);

  return (
    <main>
      <h1 className="text-3xl text-center text-red-600 p-5 mb-5">{count}</h1>

      <div className="text-center mb-3">
        <input
          type="number"
          name="increaseAmount"
          id="increaseAmount"
          min={0}
          max={1000}
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
          className="border border-red-600 p-3 rounded-lg text-red-600 hover:bg-red-600 hover:text-white hover:cursor-pointer transition-colors"
        />
      </div>
      <ul className="flex items-center justify-center gap-x-4">
        <li>
          <button
            type="button"
            onClick={() => dispatch(increment())}
            className="border border-red-600 p-3 rounded-lg text-red-600 hover:bg-red-600 hover:text-white hover:cursor-pointer transition-colors"
          >
            +1
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => dispatch(decrement())}
            className="border border-red-600 p-3 rounded-lg text-red-600 hover:bg-red-600 hover:text-white hover:cursor-pointer transition-colors"
          >
            -1
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => dispatch(reset())}
            className="border border-red-600 p-3 rounded-lg text-red-600 hover:bg-red-600 hover:text-white hover:cursor-pointer transition-colors"
          >
            Reset
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => dispatch(addByAmount(amount))}
            className="border border-red-600 p-3 rounded-lg text-red-600 hover:bg-red-600 hover:text-white hover:cursor-pointer transition-colors"
          >
            Add {amount}
          </button>
        </li>
      </ul>
    </main>
  );
}
