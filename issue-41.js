// **** Before Refactoring ****

/*
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
*/

// **** After Refactoring ****

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
