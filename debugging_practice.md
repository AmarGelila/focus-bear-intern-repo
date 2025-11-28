### Practise React Debugging in a Test Repo #33

##### What was the issue?
Mutating the count state direactly in Message component ```count.value += 5;```
##### What debugging method did you use?
I have console logged count state in counter component and in Message component before and after mutating statement.
##### How did you resolve the problem?
Since count is an object means it is passed by reference , so mutating it directly inside Message component also changes the main state in Counter component,
so to solve it I has to write the value in jsx directly and then add 5 to it.

##### Task:- 
Buggy Code:-
```
import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

export default function Counter() {
  const [count, setCount] = useState({ value: 0 });
  return (
    <div className="text-center p-5">
      <h1 className="text-blue-500 font-bold mb-5 text-5xl">
        Current count: {count.value}
      </h1>
      <PrimaryButton
        content="Plus 1"
        handleClick={() =>
          setCount((prev) => ({
            value: prev.value + 1,
          }))
        }
      />
      <Message count={count} />
    </div>
  );
}

function Message({ count }) {
  count.value += 5;

  return (
    <p>
      After adding 5 :- 
      {count.value}
    </p>
  );
}
```

After debugging 
```
import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

export default function Counter() {
  const [count, setCount] = useState({ value: 0 });
  console.log("Count from Counter Component:- ", count);
  return (
    <div className="text-center p-5">
      <h1 className="text-blue-500 font-bold mb-5 text-5xl">
        Current count: {count.value}
      </h1>
      <PrimaryButton
        content="Plus 1"
        handleClick={() =>
          setCount((prev) => ({
            value: prev.value + 1,
          }))
        }
      />
      <Message count={count} />
    </div>
  );
}

function Message({ count }) {
  console.log("Count from Message Component :- ", count);
  count.value += 5;
  console.log("Count from Message Component :- ", count);

  return (
    <p>
      After adding 5 :-
      {count.value}
    </p>
  );
}
```

After Solved :-

```
import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

export default function Counter() {
  const [count, setCount] = useState({ value: 0 });
  return (
    <div className="text-center p-5">
      <h1 className="text-blue-500 font-bold mb-5 text-5xl">
        Current count: {count.value}
      </h1>
      <PrimaryButton
        content="Plus 1"
        handleClick={() =>
          setCount((prev) => ({
            value: prev.value + 1,
          }))
        }
      />
      <Message count={count} />
    </div>
  );
}

function Message({ count }) {
  return (
    <p>
      After adding 5 : <br />
      {count.value + 5}
    </p>
  );
}
```
