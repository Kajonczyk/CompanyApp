import React, { Component } from "react";
import styled from "styled-components";
import { LinearScale } from "styled-icons/material/LinearScale";
import SubmitButton from "../Components/SubmitButton";
import CreateCompany from "../Components/CreateCompany";
import Input from "../Components/InputField";

import BossDashboard from "../Components/BossDashboard";
const StyledSection = styled.section`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;
const StyledCompanyGreeting = styled.div`
  height: 400px;
  width: 100%;
  background-color: ${({ theme }) => theme.green};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBreakingIcon = styled(LinearScale)`
  height: 50px;
  width: 50px;
  margin-left: -19px;
  color: ${({ theme }) => theme.green};
`;
const StyledLoginWrapper = styled(StyledCompanyGreeting)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.green};
`;
const IconWrapper = styled.div`
  display: flex;
  margin-left: 19px;
`;

const StyledCompanyButton = styled(SubmitButton)`
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.white};
`;
class StartScreen extends Component {
  state = {
    isCompany: false,
    isCreateMenu: false,
    companyName: "",
    workers: [],
    id: 0,
    idEditedElement: 0,
    globalEvents: []
  };
  handleCreateCompany = () => {
    this.setState({
      isCreateMenu: !this.state.isCreateMenu
    });
  };
  handleIdChange = () => {
    console.log(this.state.id);

    return this.setState({
      id: this.state.id + 1
    });
  };
  handleSetCompanyName = name => {
    this.setState({
      companyName: name
    });
  };
  handleSetWokers = args => {
    this.setState({
      workers: args
    });
    console.log(this.state.workers);
    setTimeout(() => {
      return console.log(this.state.workers);
    }, 300);
  };
  createWorker = (id, name, surname, salary, position, login, password) => {
    this.state.workers.push({
      id,
      name,
      surname,
      salary,
      position,
      login,
      password
    });
    console.log("CREATUJE");
  };

  handleDeleteUser = e => {
    // const index = this.state.workers.findIndex(index =>
    //   this.workerIndex(this.workerIndex)
    // );
    // this.workerIndex(index);
    const workers = [...this.state.workers];

    const mainDiv = e.target.parentNode.parentNode;
    const index = [...mainDiv.parentElement.children].indexOf(mainDiv);
    console.log(workers);
    workers.splice(index, 1);
    this.setState({
      workers
    });
  };
  handleEditUser = e => {
    const workers = [...this.state.workers];

    const mainDiv = e.target.parentNode.parentNode;
    const index = [...mainDiv.parentElement.children].indexOf(mainDiv);
    console.log(index);
    this.setState({
      idEditedElement: index
    });
  };
  handleUserDataChange = (index, name, surname, salary, position) => {
    console.log(index, name, surname, salary, position, "XDX");
    const workers = [...this.state.workers];
    workers[index].name = name;
    workers[index].surname = surname;
    workers[index].salary = salary;
    workers[index].position = position;
    this.forceUpdate();
  };
  handleCreateEvent = (text, date) => {
    // console.log(date, "Dziala", text);
    const obj = {
      text,
      date
    };
    // console.log(obj);
    this.state.globalEvents.push(obj);
    console.log(this.state.globalEvents);
  };

  render() {
    return (
      <StyledSection>
        <BossDashboard
          workers={this.state.workers}
          create={this.createWorker}
          deleteUser={this.handleDeleteUser}
          handleIdChange={this.handleIdChange}
          id={this.state.id}
          handleUserDataChange={this.handleUserDataChange}
          handleEditUser={this.handleEditUser}
          idEditedElement={this.state.idEditedElement}
          handleCreateEvent={this.handleCreateEvent}
        />
        <StyledCompanyGreeting>
          {this.state.companyName ? (
            `Log in to  ${this.state.companyName}`
          ) : (
            <StyledCompanyButton onClick={this.handleCreateCompany}>
              Create +
            </StyledCompanyButton>
          )}
          {this.state.isCreateMenu ? (
            <CreateCompany
              setName={this.handleSetCompanyName}
              activeMenu={this.handleCreateCompany}
              setWorkers={this.handleSetWokers}
              create={this.createWorker}
              handleIdChange={this.handleIdChange}
              id={this.state.id}
            />
          ) : null}
        </StyledCompanyGreeting>
        <IconWrapper>
          <StyledBreakingIcon />
          <StyledBreakingIcon />
        </IconWrapper>
        <StyledLoginWrapper>
          <form>
            <br />
            <Input type="text" placeholder="Login" />
            <br />
            <br />
            <br />
            <br />
            <Input type="password" placeholder="Password" />

            <SubmitButton>Login</SubmitButton>
          </form>
        </StyledLoginWrapper>
      </StyledSection>
    );
  }
}

export default StartScreen;
