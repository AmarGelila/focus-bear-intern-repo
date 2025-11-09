<<<<<<< HEAD
=======
// function that doesn’t properly handle errors or invalid inputs
function processUserData(userData) {
  let result = {};

  result.fullName = userData.firstName + " " + userData.lastName;
  result.ageGroup = userData.age > 18 ? "adult" : "minor";
  result.emailDomain = userData.email.split("@")[1];
  result.discount = userData.isVIP ? 0.2 : 0.1;
  result.membershipYears =
    new Date().getFullYear() - userData.joinDate.getFullYear();

  return result;
}

// After Refactoring
>>>>>>> 0fde26e (Add issue-39.js)
function processUserData(userData) {
  if (!userData || typeof userData !== "object")
    throw new TypeError("User Data must be a valid object");
  let result = {
    fullName: "Guest",
    ageGroup: "adult",
    emailDomain: "gmail.com",
    discount: 0,
    membershipYears: 3,
  };
  let errors = [];

  if (!userData.firstName || !userData.lastName) {
    errors.push("Please Enter both first name and last name");
  } else result.fullName = userData?.firstName + " " + userData?.lastName;

  if (isNaN(Number(userData.age))) {
    errors.push("Please enter a valid age number");
  } else result.ageGroup = userData?.age > 18 ? "adult" : "minor";

  if (!userData.email || !userData?.email.includes("@")) {
    errors.push("Please enter a valid email address");
  } else result.emailDomain = userData?.email.split("@")[1];

  result.discount = userData?.isVIP ? 0.2 : 0.1;
  result.membershipYears =
    new Date().getFullYear() - userData?.joinDate?.getFullYear();

  if (errors.length > 0)
    throw new Error(`Validation failes : ${errors.join(", \n")}`);
  return result;
}
