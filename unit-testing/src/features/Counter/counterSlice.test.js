import counterReducer, {
  increment,
  decrement,
  addByAmount,
  reset,
} from "./counterSlice";

describe("Testing Counter.js Action Creators", () => {
  test("Testing Increment Action Creator", () => {
    const expectedAction = { type: "counter/increment" };
    expect(increment()).toEqual(expectedAction);
  });

  test("Testing AddByAmount Action Creator", () => {
    const expectedAction = { type: "counter/addByAmount", payload: 5 };
    expect(addByAmount(5)).toEqual(expectedAction);
  });
});

describe("Testing Counter.js Reducers", () => {
  const initialState = {
    value: 0,
  };
  test("Test Counter Initial State", () => {
    expect(counterReducer(undefined, { type: "unkown" })).toEqual(initialState);
  });
  test("Test Counter Increment Action", () => {
    expect(counterReducer(initialState, increment())).toEqual({ value: 1 });
  });
  test("Test Counter Decrement Action", () => {
    expect(
      counterReducer(initialState, decrement()).value
    ).toBeGreaterThanOrEqual(-1);
  });
});
