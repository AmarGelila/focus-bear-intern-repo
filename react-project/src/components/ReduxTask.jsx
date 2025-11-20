import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  addByAmount,
  reset,
  selectCount,
} from "../features/counterSlice";
import { useState } from "react";

function ReduxTask() {
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

      <Message />
    </main>
  );
}

function Message() {
  const count = useSelector(selectCount);
  return (
    <h3 className="text-xl font-bold text-center mt-8 bg-red-600 w-fit p-3 text-white mx-auto rounded-xl">
      {`${count} has ${
        count < 0 ? String(count).length - 1 : String(count).length
      } digits`}{" "}
    </h3>
  );
}

export default ReduxTask;
