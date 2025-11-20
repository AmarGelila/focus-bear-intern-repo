### Introduction to Redux Toolkit #27

##### When should you use Redux instead of useState?
- There is a large amount of application states that are needed in many places in the project
- The logic for updating state is complex
- There are many people works in the same project as redux provide restrictions on how to update the state
- The application state is updated frequently


### Using Selectors in Redux Toolkit #26

##### What are the benefits of using selectors instead of directly accessing state?
Redux Selectors enables minimizing the code and applying DRY principle , 
rathar than writing ```state.counter.value``` every time I need the counter value 
I can make a selector one time as ```selectCount = state.counter.value``` and use selectCount wherever I need using ```useSelector(selectCount)```.



##### Task :-

[Store](./react-project/src/app)

[Slices](./react-project/src/features)

[Counter Component](./react-project/src/components/ReduxTask.jsx)

