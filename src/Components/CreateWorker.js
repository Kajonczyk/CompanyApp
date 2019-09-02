import React, { Component } from "react";
import styled from "styled-components";
import StyledDiv from "../Components/FullHeWiDiv";
import Input from "../Components/InputField";
import SubmitButton from "../Components/SubmitButton";
import * as validator from "../Components/Validate";

const StyledDivWrapper = styled(StyledDiv)`
  background-color: ${({ theme }) => theme.white};
  transition: transform 2s;
  transform: translate(-50%, -50%)
    translateX(${({ activeCreation }) => (activeCreation ? "0px" : "0px")});
`;
const StyledSpan = styled.span`
  color: ${({ theme }) => theme.green};
`;
const BreakerSmall = styled.div`
  padding: 10px;
`;
class CreateWorker extends Component {
  state = {
    id: this.props.id,
    name: "",
    surname: "",
    salary: "",
    position: "",
    login: "",
    password: "",
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
    } else {
      console.log("Wrong data");
    }
  };
  render() {
    const { name, surname, salary, position } = this.state;
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
          </label>
          <BreakerSmall />
          <label htmlFor="salary">
            <StyledSpan>Salary</StyledSpan>
            <br />
            <Input
              type="text"
              placeholder="Salary"
              id="salary"
              value={salary}
              onChange={this.handleChange}
            />
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
