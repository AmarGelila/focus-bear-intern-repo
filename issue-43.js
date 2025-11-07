// ***** Bad *****
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

// ***** Good *****

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
