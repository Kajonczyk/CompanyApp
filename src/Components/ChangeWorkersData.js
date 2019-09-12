import React, { Component } from "react";
import styled from "styled-components";
import Input from "../Components/InputField";
import * as validator from "../Components/Validate";
import SubmitButton from "../Components/SubmitButton";

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const BreakerSmall = styled.div`
  padding: 30px;
`;
const StyledSpan = styled.span`
  color: ${({ theme }) => theme.green};
`;

class ChangeWorkersData extends Component {
  state = {
    name: "",
    surname: "",
    salary: "",
    position: "",
    errors: {
      nameError: false,
      surnameError: false,
      salaryError: false,
      positionError: false
    }
  };
  handleChange = e => {
    const id = e.target.id;
    const value = e.target.value;

    this.setState({
      [id]: value
    });
  };
  validateFunction = () => {
    const { name, surname, salary, position, errors } = this.state;
    const self = this;
    if (
      validator.ValidateWorkerData(
        name,
        surname,
        salary,
        position,
        errors,
        self
      )
    ) {
      this.props.handleUserDataChange(
        this.props.idEditedElement,
        name,
        surname,
        salary,
        position
      );
      this.props.click();
    } else {
      console.log("XD");
    }
  };

  render() {
    const { name, surname, salary, position } = this.state;

    return (
      <StyledWrapper>
        <BreakerSmall />
        <label>
          <StyledSpan>Name</StyledSpan>
          <br />
          <Input id="name" value={name} onChange={this.handleChange} />
        </label>
        <BreakerSmall />
        <label>
          <StyledSpan>Surname</StyledSpan>
          <br />
          <Input id="surname" value={surname} onChange={this.handleChange} />
        </label>
        <BreakerSmall />
        <label>
          <StyledSpan>Salary</StyledSpan>
          <br />
          <Input id="salary" value={salary} onChange={this.handleChange} />
        </label>
        <BreakerSmall />
        <label>
          <StyledSpan>Position</StyledSpan>
          <br />
          <Input id="position" value={position} onChange={this.handleChange} />
        </label>

        <BreakerSmall />
        <SubmitButton onClick={() => this.validateFunction()}>
          Submit
        </SubmitButton>
      </StyledWrapper>
    );
  }
}

export default ChangeWorkersData;
