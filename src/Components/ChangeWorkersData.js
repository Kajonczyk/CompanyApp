import React, { Component } from "react";
import styled from "styled-components";
import Input from "../Components/InputField";
import * as validator from "../Components/Validate";

const StyledWrapper = styled.div`
  height: 50vh;
  width: 100%;
  background-color: lawngreen;
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
    } else {
      console.log("XD");
    }
  };

  render() {
    const { name, surname, salary, position, errors } = this.state;

    return (
      <StyledWrapper>
        <div>XD</div>
        <Input id="name" value={name} onChange={this.handleChange} />
        <Input id="surname" value={surname} onChange={this.handleChange} />
        <Input id="salary" value={salary} onChange={this.handleChange} />
        <Input id="position" value={position} onChange={this.handleChange} />
        <button onClick={() => this.validateFunction()}>Submit</button>
      </StyledWrapper>
    );
  }
}

export default ChangeWorkersData;
