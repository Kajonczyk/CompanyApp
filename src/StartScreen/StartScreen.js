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
import * as validator from "../Components/Validate";
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
const StyledError = styled.p`
  color: red;
`;
class StartScreen extends Component {
  state = {
    isCompany: false,
    isCreateMenu: false,
    companyName: "",
    loginForm: "",
    passwordForm: "",
    userIndex: "",
    workers: [],
    id: 0,
    idEditedElement: 0,
    loginError: false,
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
  handleSetWorkers = args => {
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
        localStorage.setItem("userToken", "kl245j6()$!#*%#!");
        this.setState({
          userIndex: i,
          loginError: false
        });
        return this.props.history.push("/user");
      } else if (loginForm === "boss" && passwordForm === "boss") {
        localStorage.setItem("bossToken", "kl^&$*!asd0-9758];245j6()$!#*%#!");
        return this.props.history.push("/boss");
      } else {
        const self = this;

        return validator.ValidateLogin(this.state.loginError, self);
      }
    });
  };
  //
  //
  //
  //
  createWorker = (id, name, surname, salary, position, login, password) => {
    const dates = [];
    this.state.workers.push({
      id,
      name,
      surname,
      salary,
      position,
      login,
      password,
      dates
    });
    console.log("CREATUJE");
  };

  handleDeleteUser = e => {
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

    const d = new Date();
    d.toLocaleString().substr(0, 9);
    const inputDate = {
      date: date,
      signIn: signIn,
      signOut: signOut
    };

    return workers[index].dates.push(inputDate);

    // return Object.assign(workers[index], { dates: inputDate });

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
            <Route render={() => <div>How did you get there boy?</div>} />
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
              setWorkers={this.handleSetWorkers}
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
            {this.state.loginError ? (
              <StyledError>Wrong Data</StyledError>
            ) : null}

            <SubmitButton onClick={this.handleSubmit}>Login</SubmitButton>
          </form>
        </StyledLoginWrapper>
      </StyledSection>
    );
  }
}

export default withRouter(StartScreen);
