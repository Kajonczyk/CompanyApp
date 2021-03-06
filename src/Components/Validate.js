import React from "react";

export const ValidateLogin = (loginError, self) => {
  return self.setState({
    loginError: true
  });
};
export const ValidateCompany = (name, workers, self) => {
  if (name.length > 1 && name.length <= 15 && workers.length >= 1) {
    self.setState({
      companyError: true
    });
    return true;
  } else {
    return false;
  }
};
export const ValidateWorkerData = (
  name,
  surname,
  salary,
  position,
  errors,
  self
) => {
  let nameErr = false;
  let surnameErr = false;
  let salaryErr = false;
  let positionErr = false;

  if (
    name.length >= 1 &&
    name.length <= 15 &&
    surname.length >= 1 &&
    surname.length <= 20 &&
    salary.length >= 3 &&
    salary.length <= 6 &&
    position.length >= 4 &&
    position.length <= 15
  ) {
    return true;
  } else {
    if (name.length < 1 || name.length > 15) {
      nameErr = true;
    }

    if (surname.length < 1 || surname.length > 20) {
      surnameErr = true;
    }
    if (salary.length < 3 || salary.length > 6) {
      salaryErr = true;
    }
    if (position.length < 4 || position.length > 15) {
      positionErr = true;
    }
    return self.setState({
      errors: {
        nameError: nameErr,
        surnameError: surnameErr,
        salaryError: salaryErr,
        positionError: positionErr
      }
    });
  }
};
export const ValidateGlobalEvent = (value, date, self) => {
  console.log(value);
  let valueError = false;
  let dateError = false;
  console.log(date);
  if (date !== "" && value.length >= 5) {
    return true;
  }
  if (date === "") dateError = true;
  if (value.length < 5) valueError = true;
  self.setState({
    errors: {
      dateError_: dateError,
      valueError_: valueError
    }
  });
};
