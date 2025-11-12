#### What code smells did you find in your code?
- Magic Numbers (.1 in calc funciton)
- Inconsisitent naming (t and m in function sendMesg)
- Duplicated Code in processUserData function
- Large class (UserManger)
- Deeply nested conditions (checkAccess function)
- Commented-out code (oldCalculation)
- Long function (handleUserRegistration)
#### How did refactoring improve the readability and maintainability of the code?
- By ensuring best practices are applyed so all teammates are able to read and understand the code
- Better Debugging Experience
- Clearer responsability sepration
- Make it easier to add new capabilities
  
#### How can avoiding code smells make future debugging easier?
By avoiding code smells the code becomes clean and maintainable with a single source of truth so debugging and discovering issues becomes easier
as each code snippet do only one thing and there is no duplication , Also using decriptive names allows future developer to understand code easily .

#### Task
##### Code that has code Smells :-
```
// Example 1: Magic Numbers & Strings + Inconsistent Naming
function calc(a, b) {
    return a * b * 0.1; // 0.1 is magic number
}

function sendMsg(t, m) { // Inconsistent naming
    if (t === 'email') { // 'email' is magic string
        console.log('Sending email: ' + m);
    } else if (t === 'sms') {
        console.log('Sending SMS: ' + m);
    }
}

// Example 2: Duplicate Code
function processUserData(users) {
    let result = [];
    
    for (let i = 0; i < users.length; i++) {
        // Duplicate validation logic
        if (users[i].age > 18 && users[i].active === true) {
            let userData = {
                name: users[i].firstName + ' ' + users[i].lastName,
                category: users[i].age < 25 ? 'Young' : 'Adult',
                score: users[i].points * 10 // Magic number
            };
            result.push(userData);
        }
    }
    
    // More duplicate validation
    for (let i = 0; i < result.length; i++) {
        if (result[i].score > 100) { // Magic number
            result[i].status = 'Premium';
        } else {
            result[i].status = 'Standard';
        }
    }
    
    return result;
}

// Example 3: Large Class (God Object)
class UserManager {
    constructor() {
        this.users = [];
        this.logs = [];
        this.config = {};
    }
    
    addUser(name, email, age) {
        // Validation
        if (age > 0 && age < 150) { // Magic numbers
            this.users.push({name, email, age});
        }
    }
    
    sendEmail(userId, message) {
        let user = this.users.find(u => u.id === userId);
        if (user) {
            console.log('Email sent to ' + user.email);
        }
    }
    
    logAction(action) {
        this.logs.push({
            action: action,
            timestamp: Date.now()
        });
    }
    
    updateConfig(settings) {
        this.config = {...this.config, ...settings};
    }
    

    
    // Many more unrelated methods...
}

// Example 4: Deeply Nested Conditionals
function checkAccess(user, resource, action) {
    if (user) {
        if (user.role === 'admin') {
            return true;
        } else if (user.role === 'user') {
            if (resource === 'profile') {
                if (action === 'read') {
                    return true;
                } else if (action === 'write') {
                    if (user.id === resource.ownerId) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        }
    }
    return false;
}

// Example 5: Commented-Out Code
function oldCalculation(a, b) {
    // let result = a + b * 0.5; // Old formula
    // if (result > 1000) { // Old threshold
    //     return result * 0.9;
    // }
    return a * b * 0.1;
}
// Example six : Long function
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


##### After Refactoring :-
```
const TEN_PERCENT = 0.1;
function calc(num1, num2) {
  return num1 * num2 * TEN_PERCENT;
}

function sendMsg(type, message) {
  if (type === "email") {
    console.log("Sending email: " + message);
  } else if (type === "sms") {
    console.log("Sending SMS: " + message);
  }
}

const POINTS_MULITPLIER = 10;
const MIN_PREMIUM_SCORE = 100;
function processUserData(users) {
  let result = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18 && users[i].active === true) {
      let userData = {
        name: users[i].firstName + " " + users[i].lastName,
        category: users[i].age < 25 ? "Young" : "Adult",
        score: users[i].points * POINTS_MULITPLIER,
      };
      if (userData.score > MIN_PREMIUM_SCORE) {
        userData.status = "Premium";
      } else {
        userData.status = "Standard";
      }
      result.push(userData);
    }
  }

  return result;
}

class UserManager {
  #MIN_AGE = 10;
  #MAX_AGE = 90;
  constructor() {
    this.users = [];
  }

  addUser(name, email, age) {
    if (age > this.#MIN_AGE && age < this.#MAX_AGE) {
      this.users.push({ name, email, age });
    }
  }

  sendEmail(userId, message) {
    let user = this.users.find((u) => u.id === userId);
    if (user) {
      console.log("Email sent to " + user.email);
    }
  }
}

class Log {
  #logs = [];
  constructor(action) {
    this.logAction(action);
  }

  logAction(action) {
    this.#logs.push({
      action: action,
      timestamp: Date.now(),
    });
  }
}

class Config {
  #config = {};

  constructor(settings) {
    this.updateConfig(settings);
  }
  updateConfig(settings) {
    this.config = { ...this.config, ...settings };
  }
}

function checkAccess(user, resource, action) {
  if (!user) return false;
  if (user.role === "admin") return true;
  if (user.role.toLowerCase() !== "user") return false;
  if (resource !== "profile") return false;
  if (action === "read") return true;
  if (action === "write" && user.id === resource.ownerId) return true;
  return false;
}

function oldCalculation(a, b) {
  return a * b * 0.1;
}

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
