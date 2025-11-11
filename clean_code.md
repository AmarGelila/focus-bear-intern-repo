## Reflection 

### Clean Code Principles #46
- Simplicity :–
      is about keeping code as simple as possible eg:( single purpose functions , avoid unnecessary calculations)
- Readability :–
      means that evey one shoulde be able to understand the code quickly
- Maintainability :–
      make the code easy to grow and future developers should understand it easily.
- Consistency :–
      Follow code style best practices that any developer should know eg:(naming conventions , whitespaces)
- Efficiency :–
      Clean Code is efficient , means it uses the minimum resources. 

***

### Code Formatting & Style Guides #45

#### Why is code formatting important?
- Easier code review
- Single source of truth
- Reduces cognitive load
  
#### What issues did the linter detect?
- Undeclared variables
- Unused Variables
- Unreachable code
- Enforce use of strict equality (===) over (==)

#### Did formatting the code make it easier to read?
Yes in most cases but there are cases where prettier may make it look ugly and overwhelmed

***

### Naming Variables & Functions #44
#### What makes a good variable or function name?
- Use of descriptive and specific names
- Stick to established naming patterns
  
#### What issues can arise from poorly named variables?
- Not understanding the code
- Hard to refactor and maintain
  
#### How did refactoring improve code readability?
- By ensuring best practices are applyed so all teammates are able to read and understand the code

#### Task 

Unclear componenet:-
```
// ❌ Unclear component
const Comp = ({ d, l, onC }) => {
  const [s, setS] = useState([]);
  const [v, setV] = useState(false);

  const h = async () => {
    setV(true);
    try {
      const r = await fetch("/api");
      const j = await r.json();
      setS(j);
    } catch (e) {
      console.log(e);
    } finally {
      setV(false);
    }
  };

  return (
    <div>
      {l && <button onClick={onC}>Close</button>}
      {v && <p>Loading...</p>}
      {s.map((i) => (
        <div key={i.id}>{i.n}</div>
      ))}
    </div>
  );
};

```

Clear Component "After Refactoring":-
```
// Clear component
const ItemsList = ({ showCloseButton, handleClose }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getItems = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api");
      const itemsData = await itemsData.json();
      setItems(j);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {showCloseButton && <button onClick={handleClose}>Close</button>}
      {isLoading && <p>Loading...</p>}
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
```

*** 

### Writing Small, Focused Functions #43

#### Why is breaking down functions beneficial?
- Each function can be tested in isolation
- Enhance Reusability
- Enhance Readability
  
#### How did refactoring improve the structure of the code?
- Better Debugging Experience
- Clearer responsability sepration
- Make it easier to add new capabilities

#### Task :- 
A long and complex function:-
```
function handleUserRegistration(userData) {
  if (!userData.email.includes("@")) {
    throw new Error("Invalid email");
  }
  if (userData.password.length < 8) {
    throw new Error("Password too short");
  }

  const db = connectToDatabase();
  const userId = db.insert("users", userData);

  const emailService = new EmailService();
  emailService.send({
    to: userData.email,
    subject: "Welcome!",
    body: "Thanks for registering!",
  });

  console.log(`User ${userId} registered`);

  return userId;
}
```

After Refactoring in multiple smaller functions with clear responsibilities:-
```
function validateUserData(userData) {
  if (!userData.email.includes("@")) {
    throw new Error("Invalid email");
  }
  if (userData.password.length < 8) {
    throw new Error("Password too short");
  }
}

function saveUserToDatabase(userData) {
  const db = connectToDatabase();
  const userId = db.insert("users", userData);
  return userId;
}

function sendEmail(userData) {
  const emailService = new EmailService();
  emailService.send({
    to: userData.email,
    subject: "Welcome!",
    body: "Thanks for registering!",
  });
}

function registerUser(userData) {
  validateUserData();
  const userId = saveUserToDatabase();
  sendEmail();
  console.log(`User ${userId} registered`);
}
```


*** 

### Refactoring Code for Simplicity #41
#### What made the original code complex?
- Long functions
- Duplicated code
- DRY principle was not applied
- Complex logic
  
#### How did refactoring improve it?
- Made it easier to maintain and scale
- Made it readable and easily understandable
- Improved performance


#### Task :-

Overly complicated code :-
```
function validateUserRegistration(data) {
  let validationResult = {
    isValid: true,
    errors: [],
  };

  // Email validation
  if (data.email) {
    if (typeof data.email === "string") {
      let emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(data.email)) {
        validationResult.isValid = false;
        validationResult.errors.push("EMAIL_INVALID_FORMAT");
      }
    } else {
      validationResult.isValid = false;
      validationResult.errors.push("EMAIL_NOT_STRING");
    }
  } else {
    validationResult.isValid = false;
    validationResult.errors.push("EMAIL_REQUIRED");
  }

  // Password validation
  if (data.password) {
    if (data.password.length >= 8) {
      let hasUpperCase = /[A-Z]/.test(data.password);
      let hasLowerCase = /[a-z]/.test(data.password);
      let hasNumbers = /\d/.test(data.password);
      let hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
        data.password
      );

      if (!hasUpperCase) {
        validationResult.isValid = false;
        validationResult.errors.push("PASSWORD_NO_UPPERCASE");
      }
      if (!hasLowerCase) {
        validationResult.isValid = false;
        validationResult.errors.push("PASSWORD_NO_LOWERCASE");
      }
      if (!hasNumbers) {
        validationResult.isValid = false;
        validationResult.errors.push("PASSWORD_NO_NUMBER");
      }
      if (!hasSpecialChar) {
        validationResult.isValid = false;
        validationResult.errors.push("PASSWORD_NO_SPECIAL_CHAR");
      }
    } else {
      validationResult.isValid = false;
      validationResult.errors.push("PASSWORD_TOO_SHORT");
    }
  } else {
    validationResult.isValid = false;
    validationResult.errors.push("PASSWORD_REQUIRED");
  }

  // Age validation
  if (data.age !== undefined && data.age !== null) {
    let ageNum = parseInt(data.age);
    if (!isNaN(ageNum)) {
      if (ageNum < 18) {
        validationResult.isValid = false;
        validationResult.errors.push("AGE_TOO_YOUNG");
      } else if (ageNum > 120) {
        validationResult.isValid = false;
        validationResult.errors.push("AGE_TOO_OLD");
      }
    } else {
      validationResult.isValid = false;
      validationResult.errors.push("AGE_INVALID");
    }
  }

  return validationResult;
}
```

After Refactoring into simpler and more readable code :-

```
function validateUserRegistration(data) {
  let validationResult = {
    isValid: true,
    errors: [],
  };

  validateEmail(data, validationResult);
  validatePassword(data, validationResult);
  validateAge(data, validationResult);

  return validationResult;
}

function validateEmail(data, validationResult) {
  if (!data.email) {
    addValidationError("EMAIL_REQUIRED", validationResult);
    return;
  }

  if (typeof data.email !== "string") {
    addValidationError("EMAIL_NOT_STRING", validationResult);
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    addValidationError("EMAIL_INVALID_FORMAT", validationResult);
    return;
  }
}

function validatePassword(data, validationResult) {
  if (!data.password) {
    addValidationError("PASSWORD_REQUIRED", validationResult);
    return;
  }

  if (data.password.length < 8) {
    addValidationError("PASSWORD_TOO_SHORT", validationResult);
  }

  const tests = [
    { regex: /[A-Z]/, error: "PASSWORD_NO_UPPERCASE" },
    { regex: /[a-z]/, error: "PASSWORD_NO_LOWERCASE" },
    { regex: /\d/, error: "PASSWORD_NO_NUMBER" },
    {
      regex: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
      error: "PASSWORD_NO_SPECIAL_CHAR",
    },
  ];

  for (let test of tests) {
    if (!test.regex.test(data.password))
      addValidationError(test.error, validationResult);
  }
}
function validateAge(data, validationResult) {
  if (!data.age) return;

  let ageNum = parseInt(data.age);
  if (isNaN(ageNum)) {
    addValidationError("AGE_INVALID", validationResult);
    return;
  }
  if (ageNum < 18) {
    addValidationError("AGE_TOO_YOUNG", validationResult);
    return;
  }
  if (ageNum > 120) {
    addValidationError("AGE_TOO_OLD", validationResult);
    return;
  }
}

function addValidationError(message, validationResult) {
  validationResult.isValid = false;
  validationResult.errors.push(message);
}
```


*** 

### Commenting & Documentation #40

#### When should you add comments?
- Explain why this code
- Clarify complex algorithm
- Warn about side effects
- Explain how to deal with the code 
  
#### When should you avoid comments and instead improve the code?
- When the code is messy and unclean
- Restate the what this code do "Code be self explantory"
- Justify bad code
- Leave Commented-out code "should be deleted"


***

### Handling Errors & Edge Cases #39

#### What was the issue with the original code?
The original code does not provide any error handling or edge cases checks which may cause many runtime errors and make the User Experience very bad

#### How does handling errors improve reliability?
- Providing error fallback makes the website works even there is a error
- Provide instructions for the user on how to enter the right data


***

### Avoiding Code Duplication #42

#### What were the issues with duplicated code?
- There are many duplicated calculations and this uses a lot of memory and affects performance
- When want to change something in the code developer has to make the same change in the multiple places.
  
#### How did refactoring improve maintainability?
Refactoring and applying DRY principle makes a single source of truth so if I want to fix somthing I fix it in one place and make it easy to add more functionalities and grow the code.

#### Task
Code inlcudes Duplicatoin:-
```
function calculateTotalPrice(cart) {
  let total = 0;
  
  // Calculate subtotal
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  
  // Apply discount based on total
  if (total > 1000) {
    total = total * 0.9; // 10% discount
  } else if (total > 500) {
    total = total * 0.95; // 5% discount
  }
  
  // Add shipping
  if (total < 50) {
    total += 10;
  } else if (total < 100) {
    total += 5;
  } else {
    total += 0;
  }
  
  return total;
}

function displayCartSummary(cart) {
  let subtotal = 0;
  
  // Calculate subtotal (same logic as above)
  for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].price * cart[i].quantity;
  }
  
  // Apply discount (same logic as above)
  let discountedTotal = subtotal;
  if (subtotal > 1000) {
    discountedTotal = subtotal * 0.9;
  } else if (subtotal > 500) {
    discountedTotal = subtotal * 0.95;
  }
  
  // Calculate shipping (same logic as above)
  let shipping = 0;
  if (discountedTotal < 50) {
    shipping = 10;
  } else if (discountedTotal < 100) {
    shipping = 5;
  }
  
  console.log(`Subtotal: $${subtotal}`);
  console.log(`Discount: $${subtotal - discountedTotal}`);
  console.log(`Shipping: $${shipping}`);
  console.log(`Total: $${discountedTotal + shipping}`);
}

function checkFreeShippingEligibility(cart) {
  let subtotal = 0;
  
  // Calculate subtotal (same logic again!)
  for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].price * cart[i].quantity;
  }
  
  // Apply discount (same logic again!)
  let discountedTotal = subtotal;
  if (subtotal > 1000) {
    discountedTotal = subtotal * 0.9;
  } else if (subtotal > 500) {
    discountedTotal = subtotal * 0.95;
  }
  
  return discountedTotal >= 100;
}

// Example usage
const shoppingCart = [
  { name: "Laptop", price: 800, quantity: 1 },
  { name: "Mouse", price: 25, quantity: 2 },
  { name: "Keyboard", price: 75, quantity: 1 }
];

console.log("Total Price:", calculateTotalPrice(shoppingCart));
displayCartSummary(shoppingCart);
console.log("Free Shipping:", checkFreeShippingEligibility(shoppingCart));
```
After Refactoring :-
```
function calculateTotalPrice(cart) {
  return processCart(cart).total;
}

function displayCartSummary(cart) {
  let cartInfo = processCart(cart);

  console.log(`Subtotal: $${cartInfo.subtotal}`);
  console.log(`Discount: $${cartInfo.discount}`);
  console.log(`Shipping: $${cartInfo.shipping}`);
  console.log(`Total: $${cartInfo.total}`);
}
function checkFreeShippingEligibility(cart) {
  const cartInfo = processCart(cart);
  return cartInfo.shipping === 0;
}
function processCart(cart) {
  let cartInfo = {
    subtotal: 0,
    discount: 0,
    discountedTotal: 0,
    shipping: 0,
    total: 0,
  };

  cart.reduce((acc, crr) => {
    acc += crr.price * crr.quantity;
    return acc;
  }, 0);

  if (cartInfo.subtotal > 1000) {
    cartInfo.discount = cartInfo.subtotal * 0.1;
  } else if (subtotal > 500) {
    cartInfo.discount = cartInfo.subtotal * 0.05;
  }

  cartInfo.discountedTotal = cartInfo.subtotal - cartInfo.discount;
  if (cartInfo.discountedTotal < 50) {
    cartInfo.shipping = 10;
  } else if (cartInfo.discountedTotal < 100) {
    cartInfo.shipping = 5;
  }

  cartInfo.total = cartInfo.discountedTotal + cartInfo.shipping;

  return cartInfo;
}

// Example usage
const shoppingCart = [
  { name: "Laptop", price: 800, quantity: 1 },
  { name: "Mouse", price: 25, quantity: 2 },
  { name: "Keyboard", price: 75, quantity: 1 },
];

console.log("Total Price:", calculateTotalPrice(shoppingCart));
displayCartSummary(shoppingCart);
console.log("Free Shipping:", checkFreeShippingEligibility(shoppingCart));```
```




***























