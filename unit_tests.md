### Introduction to Unit Testing with Jest #19

##### Why is automated testing important in software development?
Ensures code quality , Reduces testing costs , Eliminates human errors and enables continuous integration and delivery (CI/CD).

##### What did you find challenging when writing your first Jest test?
I spend some time in the setup as I use vite for my project , so I created another project using npm create-react-app , After setup learning jest and RTL was smooth.

##### Task :-
See :-
- Testing Setup :- [unit-testing](./unit-testing)
- Simple Unit :- [sum.js](./unit-testing/src/utils/sum.js)
- Simple Unit Test :- [sum.test.js](./unit-testing/src/utils/sum.test.js)


***

### Testing React Components with Jest & React Testing Library #18

##### What are the benefits of using React Testing Library instead of testing implementation details?
React Testing Library emulates user interaction , it fouces on the result of the code not the code itself , so it helps better achieve what user want.

##### What challenges did you encounter when simulating user interaction?
For Example when clicking on a button the test fail I have discovered that clicking is an async process so I have to wait for it.

#### Task :- 
See:-

- [Components](./unit-testing/src/components)
- [Mocks](./unit-testing/src/utils/__mocks__)


***

### Mocking API Calls in Jest #17

##### Why is it important to mock API calls in tests?
In unit testing we do not care about the server or APIs implmentation , so we should mock their response to make testing faster.

##### What are some common pitfalls when testing asynchronous code?
Possible request rejection , responses timeout and internal server errors.

##### Task:-
See :- [Posts Component](./unit-testing/src/components/Posts)


***

### Testing Redux with Jest #16

##### What was the most challenging part of testing Redux?
Testing Redux Thunks takes more time to handle all actions and states
##### How do Redux tests differ from React component tests?
Redux Tests deals with action createors and reducers implmentaion , React component tests works from the perspective of the user, rathar than the implmentation it deals with what should be on the screen.

##### Task:-
see [Posts Features](./unit-testing/src/features/Posts)










