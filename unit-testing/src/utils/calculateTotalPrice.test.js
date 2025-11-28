import calculateTotalPrice from "./calculateTotalPrice";

describe("Calculate Total Price Test", () => {
  test("Shoud throw an unvalid basePrice error ", () => {
    expect(() => {
      calculateTotalPrice(-10, 0.08);
    }).toThrow("basePrice must be a non-negative number");
  });

  test("Shoud throw an unvalid taxRate error ", () => {
    expect(() => {
      calculateTotalPrice(10, "0.08");
    }).toThrow("taxRate must be a non-negative number");
  });

  test("Shoud throw an unvalid discount error ", () => {
    expect(() => {
      calculateTotalPrice(1000, 0.08, -100);
    }).toThrow("discount must be a non-negative number");
  });

  test("Shoud throw an unvalid isMember error ", () => {
    expect(() => {
      calculateTotalPrice(1000, 0.05, 50, "yes");
    }).toThrow("isMember must be a boolean");
  });

  test("Should return the correct result 990 ", () => {
    expect(calculateTotalPrice(1000, 0.1, 100)).toBe(990);
  });

  test("Should return the correct result 891 ", () => {
    expect(calculateTotalPrice(1000, 0.1, 100, true)).toBe(891);
  });

  test("Should return the correct result 990 ", () => {
    expect(calculateTotalPrice(1000, 0.1, 100, false)).toBe(990);
  });

  test("Should return the correct result 990 ", () => {
    expect(calculateTotalPrice(1000, 0.1, 0, true)).toBe(990);
  });
});

/*
    ---- Throws error with unvalid inputs
        --- unvalid basePrice
        --- unvalid discount
        --- unvalid taxRate
        --- unvalid memeber
    
    ---- Calculates Correct Answers with different arguments
*/
