import { useState, useMemo } from "react";
function UseMemoTask() {
  const [maxNumber, setMaxNumber] = useState(1000);

  const numbers = useMemo(() => {
    let result = [];
    for (let i = 0; i <= maxNumber; i++) {
      result.push(i);
    }
    return result;
  }, [maxNumber]);

  return (
    <main>
      <div className="p-3 mb-5 border-2">
        <input
          type="number"
          name="maxNumber"
          value={maxNumber}
          onChange={(e) => setMaxNumber(+e.target.value)}
        />
      </div>
      <div>
        <ul className="flex items-center gap-x-3 gap-y-6 flex-wrap">
          {numbers.map((number) => (
            <Number value={number} key={number} />
          ))}
        </ul>
      </div>
    </main>
  );
}

function Number({ value }) {
  return (
    <li className="rounded-t-full bg-rose-400 text-white font-bold p-3">
      {value}
    </li>
  );
}
export default UseMemoTask;
