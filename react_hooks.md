## Understanding React Hooks: useEffect #24
##### When should you use useEffect instead of handling logic inside event handlers?
when Synchronizing with external systems like APIS , Browser Storage and Servers , Also when allocating and releasing timeouts or intervals.
##### What happens if you don’t provide a dependency array?
If I don't provide a dependency array the useEffect callback function will run every render , which may cause performance and memory issues if not handled properly.
##### How can improper use of useEffect cause performance issues?
Cases like empty dependency array , missing dependencies or changing a state that is a dependency may cause issue like infinite re-renders or memeory leak.

##### Task :-

Here it is a react component that fetchs fake posts when a button clicked and logs a message when mounts and unmounts , Also useEffect() has a cleanup function:-
```
import { useEffect, useState } from "react";

function UseEffectTask() {
  const [posts, setPosts] = useState([]);
  const [fetchDataEnabled, setFetchDataEnabled] = useState(false);

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) throw Error("An Error Occured while Getting Data");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    }

    if (!ignore) {
      console.log("UseEffectTask Component Mounted");
      if (fetchDataEnabled) fetchData();
    }

    return () => {
      console.log("UseEffectTask Component UnMounted");
      ignore = true;
    };
  }, [fetchDataEnabled]);

  return (
    <main className="p-5">
      <div>
        <h1>useEffect Task Issue #24</h1>
        <button
          onClick={() => setFetchDataEnabled(true)}
          className="px-3 py-1 border-2 disabled:opacity-30 border-blue-500 mt-5 text-1xl active:text-blue-300 transition-colors font-black rounded-2xl text-blue-500 enabled:hover:bg-blue-500 enabled:hover:text-white bg-white enabled:hover:cursor-pointer"
          disabled={fetchDataEnabled}
        >
          Fetch Data
        </button>
      </div>
      <div>
        {posts.map((post) => (
          <li key={post.id}>
            <h5> {post.title}</h5>
          </li>
        ))}
      </div>
    </main>
  );
}

export default UseEffectTask;
```

***


### ptimizing Performance with useMemo #23

##### How does useMemo improve performance?
useMemo improve performance by memorising values that uses expensive resources , and only re-calculate it when one of the dependencies changes.

##### When should you avoid using useMemo?
useMemo should be avoided in unnecessary situations such as simple calculations or small data , as it has trad-offs in memory

##### What happens if you remove useMemo from your implementation?
If I removed useMemo from UseMemoTask component the data (numbers) will be calculated every re-renders even if it is the same value as the previous render.

##### Task :-
Here it is a component that render a large set of numbers and only re-calculate numbers if maxNumber changes
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
```
***
