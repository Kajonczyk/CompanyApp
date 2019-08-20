import React from "react";

export const ValidateLogin = (loginError, self) => {
  return self.setState({
    loginError: true
  });
};
export const ValidateCompany = (name, workers, self) => {
  if (name.length > 1 && workers.length >= 1) {
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
  const { nameError, surnameError, salaryError, positionError } = errors;
  let nameErr = false;
  let surnameErr = false;
  let salaryErr = false;
  let positionErr = false;

  if (
    name.length > 1 &&
    surname.length > 1 &&
    salary.length >= 3 &&
    position.length >= 4
  ) {
    return true;
  } else {
    if (name.length < 1) {
      nameErr = true;
    }

    if (surname.length < 1) {
      surnameErr = true;
    }
    if (salary.length < 3) {
      salaryErr = true;
    }
    if (position.length < 4) {
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