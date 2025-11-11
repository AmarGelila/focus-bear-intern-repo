## Reflection

### Setting up a React project #32

#### What challenges did you face during setup?
None


***

### Understanding Components & Props #31

#### Why are components important in React?
- Enhance Reusability
- Speration of concerns
- Can be nested to form complex components
- Props make them dynamic and configurable

***


###  Handling State & User Input #30

#### What happens if we modify state directly instead of using setState?
The UI does not update when click on add button as react renders only when a state changes 

***


### Styling with Tailwind CSS #29

#### What are the advantages of using Tailwind CSS?
- Quick CSS Styling
- Rarely Leave .jsx files
- Enable styling in dark mode using (dark:) variant
- Almost has all css properities
- Enable add custom classes
  
#### What are some potential pitfalls?
- Can lead to cluttered and hard-to-read HTML and JSX
- May write many duplicated code if I have multiple versions of the same element
  
#### Task :-
Counter.js and a Button component styled with tailwind css:-
```
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

```

***


### Working with Lists & User Input #28

#### What are some common issues when working with lists in React?
React requires that each list item should has a unique key in its list , and sometiems such as required in the task the list item does not have a unique id so I had to use array indices as keys which works good but would be better if each list item has a unique id in its stucture

#### Task :-
See [Form.jsx](./react-project/src/components/Form.jsx)

***

