import React, { Component } from "react";
import styled from "styled-components";
import StyledDiv from "../Components/FullHeWiDiv";
import Input from "../Components/InputField";
import SubmitButton from "../Components/SubmitButton";

const StyledDivWrapper = styled(StyledDiv)`
  background-color: ${({ theme }) => theme.white}
  transition: transform 2s;
  transform: translate(-50%, -50%)
    translateX(${({ activeCreation }) => (activeCreation ? "0px" : "0px")});
`;
class CreateWorker extends Component {
  state = {
    id: this.props.id,
    name: "",
    surname: "",
    salary: "",
    position: "",
    login: "",
    password: ""
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
    console.log(`${id} is : ${this.state[id]}`);
  };
  handleSubmit = () => {
    const { id, name, surname, salary, position } = this.state;
    this.props.handleIdChange();
    this.handleIdChange();
    console.log(this.state.id);

    let loginName = name;
    let loginSurname = surname;
    let login = loginName + loginSurname + id;
    let password = id + loginSurname + loginName;
    this.props.create(id, name, surname, salary, position, login, password);
    this.setState({
      name: "",
      surname: "",
      salary: "",
      position: ""
    });
  };
  render() {
    const { name, surname, salary, position } = this.state;
    return (
      <StyledDivWrapper activeCreation={this.props.activeCreation}>
        <div>asdsad</div>
        <form>
          <label htmlFor="name">
            Name
            <br />
            <Input
              type="text"
              placeholder="Name"
              id="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="surname">
            Surname
            <br />
            <Input
              type="text"
              placeholder="Surname"
              id="surname"
              value={surname}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="salary">
            Salary
            <br />
            <Input
              type="text"
              placeholder="Salary"
              id="salary"
              value={salary}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="position">
            Position
            <br />
            <Input
              type="text"
              placeholder="Position"
              id="position"
              value={position}
              onChange={this.handleChange}
            />
          </label>
          <br />
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
