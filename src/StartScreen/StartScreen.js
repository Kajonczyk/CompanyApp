import React, { Component } from "react";
import styled from "styled-components";
import { LinearScale } from "styled-icons/material/LinearScale";
import SubmitButton from "../Components/SubmitButton";
import CreateCompany from "../Components/CreateCompany";
import Input from "../Components/InputField";
import firebase from "firebase";
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
    workers: []
  };
  handleCreateCompany = () => {
    this.setState({
      isCreateMenu: !this.state.isCreateMenu
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
  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyBxCDOhCIh3q4I-lVpHhTjvj_X4SV7jMJw",
      authDomain: "company-bc021.firebaseapp.com",
      databaseURL: "https://company-bc021.firebaseio.com",
      projectId: "company-bc021",
      storageBucket: "",
      messagingSenderId: "156522290116",
      appId: "1:156522290116:web:33c09ddb7c0c68ac"
    };
    firebase.initializeApp(firebaseConfig);
    console.log(firebase);
    const database = firebase.database();
    const fruits = database.ref("owocki");
    const data = {
      name: "Essa",
      price: 15
    };
    fruits.push(data);
    console.log(data);
  }
  workerIndex = worker => {
    console.log(worker.id);
    return worker.name;
  };
  handleDeleteUser = e => {
    const index = this.state.workers.findIndex(this.workerIndex);
    console.log("klik", index);
  };

  render() {
    return (
      <StyledSection>
        {/* <BossDashboard
          workers={this.state.workers}
          create={this.createWorker}
          deleteUser={this.handleDeleteUser}
        /> */}
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
