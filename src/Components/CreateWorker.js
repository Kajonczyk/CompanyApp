import React, { Component } from "react";
import styled from "styled-components";
import StyledDiv from "../Components/FullHeWiDiv";
import Input from "../Components/InputField";
import SubmitButton from "../Components/SubmitButton";
import StyledError from "../Components/StyledError";
import * as validator from "../Components/Validate";

const StyledDivWrapper = styled(StyledDiv)`
  background-color: ${({ theme }) => theme.white};
  transition: transform 2s;
  height: auto;
  min-height: 100%;
  transform: translate(-50%, -50%);
  justify-content: center;
  text-align: center;
`;
const StyledSpan = styled.span`
  color: ${({ theme }) => theme.green};
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;
const BreakerSmall = styled.div`
  padding: 30px;
`;
class CreateWorker extends Component {
  state = {
    id: this.props.id,
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
  handleIdChange = () => {
    this.setState(prevState => ({
      id: this.state.id + 1
    }));
  };

  handleChange = e => {
    const id = e.target.id;
    let value = e.target.value;
    this.setState({
      [id]: value
    });
  };
  handleSubmit = () => {
    const { id, name, surname, salary, position, errors } = this.state;
    const self = this;

    console.log(this.state.id);

    let loginName = name;
    let loginSurname = surname;
    let login = loginName + loginSurname + id;
    let password = id + loginSurname + loginName;
    //poi
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
      this.props.handleIdChange();
      this.handleIdChange();
      this.props.create(id, name, surname, salary, position, login, password);
      this.setState({
        name: "",
        surname: "",
        salary: "",
        position: ""
      });
      return alert(`Login:  ${login}, Haslo: ${password}`);
    } else {
      console.log("Wrong data");
    }
  };
  render() {
    const { name, surname, salary, position } = this.state;
    const {
      nameError,
      surnameError,
      salaryError,
      positionError
    } = this.state.errors;
    return (
      <StyledDivWrapper activeCreation={this.props.activeCreation}>
        <form>
          <BreakerSmall />
          <label htmlFor="name">
            <StyledSpan>Name</StyledSpan>
            <br />
            <Input
              type="text"
              placeholder="Name"
              id="name"
              value={name}
              onChange={this.handleChange}
            />
            {nameError ? (
              <StyledError>Name valid length is 1-15</StyledError>
            ) : null}
          </label>
          <BreakerSmall />
          <label htmlFor="surname">
            <StyledSpan>Surname</StyledSpan>
            <br />
            <Input
              type="text"
              placeholder="Surname"
              id="surname"
              value={surname}
              onChange={this.handleChange}
            />
            {surnameError ? (
              <StyledError>Surname valid length is 1-20</StyledError>
            ) : null}
          </label>
          <BreakerSmall />
          <label htmlFor="salary">
            <StyledSpan>Salary</StyledSpan>
            <br />
            <Input
              type="number"
              placeholder="Salary"
              id="salary"
              value={salary}
              onChange={this.handleChange}
            />
            {salaryError ? (
              <StyledError>Salary valid length is 3-6</StyledError>
            ) : null}
          </label>
          <BreakerSmall />
          <label htmlFor="position">
            <StyledSpan>Position</StyledSpan>
            <br />
            <Input
              type="text"
              placeholder="Position"
              id="position"
              value={position}
              onChange={this.handleChange}
            />
            {positionError ? (
              <StyledError>Position valid length is 4-15 </StyledError>
            ) : null}
          </label>
          <BreakerSmall />
        </form>
        <SubmitButton
          onClick={() => {
            this.props.close();
          }}
        >
          Cancel
        </SubmitButton>
        <SubmitButton onClick={this.handleSubmit}>Confirm</SubmitButton>
      </StyledDivWrapper>
    );
  }
}
export default CreateWorker;
