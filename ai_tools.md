## Reflection
#### Which AI tools did you try?
- chat GPT
- Deep Seek
- GitHub Copilot
  
#### What worked well? What didn’t?
Works well as a summarized reference , best practices and code improvment 
Don't work well for complex code and algorithms.

#### When do you think AI is most useful for coding?
- Styling
- Best Practices
- Find Security issues
- Do routine tasks


#### I have provided this code to deepseek to review it :- 

```
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
          onChange={(e) => setMaxNumber(e.target.value)}
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
```

and here it is its improvments

```
import { useState, useMemo, useCallback } from "react";

function UseMemoTask() {
  const [maxNumber, setMaxNumber] = useState(1000);

  // Handle input change properly
  const handleChange = useCallback((e) => {
    const value = parseInt(e.target.value) || 0;
    setMaxNumber(Math.max(0, Math.min(value, 10000))); // Add some bounds
  }, []);

  // useMemo for the expensive array generation
  const numbers = useMemo(() => {
    console.log('Generating numbers array...'); // To see when it recalculates
    const result = [];
    for (let i = 0; i <= maxNumber; i++) {
      result.push(i);
    }
    return result;
  }, [maxNumber]);

  return (
    <main className="p-4">
      <div className="p-3 mb-5 border-2 rounded-lg">
        <label htmlFor="maxNumber" className="block mb-2 font-semibold">
          Maximum Number: {maxNumber}
        </label>
        <input
          id="maxNumber"
          type="range"
          min="0"
          max="5000"
          value={maxNumber}
          onChange={handleChange}
          className="w-full"
        />
        <input
          type="number"
          value={maxNumber}
          onChange={handleChange}
          className="mt-2 p-2 border rounded w-full"
          min="0"
          max="10000"
        />
        <p className="mt-2 text-sm text-gray-600">
          Generating {numbers.length} numbers
        </p>
      </div>
      
      {/* Virtualized list for better performance with large numbers */}
      <NumberList numbers={numbers} />
    </main>
  );
}

// Memoized component to prevent unnecessary re-renders
const Number = React.memo(({ value }) => {
  return (
    <li className="rounded-full bg-rose-400 text-white font-bold p-3 min-w-[50px] text-center">
      {value}
    </li>
  );
});

// Simple virtualized list for better performance
function NumberList({ numbers }) {
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 100 });
  
  // For demonstration, show only a subset
  const visibleNumbers = numbers.slice(visibleRange.start, Math.min(visibleRange.end, numbers.length));
  
  return (
    <div>
      <div className="mb-4">
        <p>Showing {visibleRange.start + 1}-{Math.min(visibleRange.end, numbers.length)} of {numbers.length} numbers</p>
        <input
          type="range"
          min="0"
          max={numbers.length - 100}
          value={visibleRange.start}
          onChange={(e) => setVisibleRange({
            start: parseInt(e.target.value),
            end: parseInt(e.target.value) + 100
          })}
          className="w-full"
        />
      </div>
      <ul className="flex items-center gap-x-3 gap-y-6 flex-wrap">
        {visibleNumbers.map((number) => (
          <Number value={number} key={number} />
        ))}
      </ul>
    </div>
  );
}

export default UseMemoTask;
```
#### A common scenario that I use AI in is to help me with custom libraries syntax such as zustand and react-router-dom.
#### One Advice I recieved from AI is to avoid using .innertHTML when dealing with user input .
