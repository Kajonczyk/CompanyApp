import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import styled from "styled-components";

import { LinearScale } from "styled-icons/material/LinearScale";
import SubmitButton from "../Components/SubmitButton";
import CreateCompany from "../Components/CreateCompany";
import Input from "../Components/InputField";
import history from "../Components/history";
import BossDashboard from "../Components/BossDashboard";
import UserDashboard from "../Components/UserDashboard";
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
    loginForm: "",
    passwordForm: "",
    userIndex: "",
    workers: [
      // {
      //   id: 0,
      //   login: "12330",
      //   name: "123",
      //   password: "03123",
      //   position: "65",
      //   salary: "4",
      //   surname: "3"
      // },
      // {
      //   id: 1,
      //   login: "938ui5",
      //   name: "9035",
      //   password: "938xd",
      //   position: "65",
      //   salary: "4",
      //   surname: "3"
      // }
    ],
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
  };
  //
  //
  //
  //
  componentDidMount() {
    console.log(history.location);
    console.log(history);
    console.log(this.props);
  }
  handleChange = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const { workers, loginForm, passwordForm } = this.state;
    console.log(this.props.history);

    workers.forEach((worker, i) => {
      if (
        loginForm === workers[i].login &&
        passwordForm === workers[i].password
      ) {
        console.log("Zalogowano jako user");
        this.setState({
          userIndex: i
        });
        return this.props.history.push("/user");
      } else if (loginForm === "boss" && passwordForm === "boss") {
        return this.props.history.push("/boss");
      }
    });
  };
  //
  //
  //
  //
  createWorker = (id, name, surname, salary, position, login, password) => {
    this.state.workers.push({
      id,
      name,
      surname,
      salary,
      position,
      login,
      password,
      dates: {}
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
  //
  //
  //
  //
  //
  //
  handleUserDateChange = (index, date, signIn, signOut) => {
    const workers = [...this.state.workers];
    console.log(workers[index]);
    console.log([...this.state.workers]);
    console.log(typeof workers);
    console.log(workers);
    const d = new Date();
    d.toLocaleString().substr(0, 9);
    const inputDate = {
      [date]: {
        signIn: signIn,
        signOut: signOut
      }
    };
    return Object.assign(workers[index], { dates: inputDate });
    console.log(workers[1]);

    // return inputDate;
  };
  //
  //
  //
  //
  //
  //
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
    const globalEvents = [...this.state.globalEvents];
    const obj = {
      date: {
        date: date,
        text: text
      }
    };
    // console.log(obj);
    globalEvents.push(obj);
    this.setState({
      globalEvents: globalEvents
    });
    console.log(this.state.globalEvents);
  };

  render() {
    return (
      <StyledSection>
        <Router history={history}>
          <Switch>
            <Route exact path="/" />
            <Route
              path="/user"
              render={() => (
                <UserDashboard
                  user={this.state.workers[this.state.userIndex]}
                  handleUserDateChange={this.handleUserDateChange}
                  globalEvents={this.state.globalEvents}
                />
              )}
            />
            <Route
              path="/boss"
              render={() => (
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
              )}
            />
          </Switch>
        </Router>
        {/*  */}
        {/* <UserDashboard /> */}
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
            <Input
              type="text"
              placeholder="Login"
              onChange={this.handleChange}
              name="loginForm"
            />
            <br />
            <br />
            <br />
            <br />
            <Input
              type="password"
              placeholder="Password"
              name="passwordForm"
              onChange={this.handleChange}
            />

            <SubmitButton onClick={this.handleSubmit}>Login</SubmitButton>
          </form>
        </StyledLoginWrapper>
      </StyledSection>
    );
  }
}

export default withRouter(StartScreen);
