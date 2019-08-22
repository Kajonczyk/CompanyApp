import React, { Component } from "react";
import styled from "styled-components";
import Input from "../Components/InputField";
import SubmitButton from "../Components/SubmitButton";
import StyledDiv from "../Components/FullHeWiDiv";
import CreateWorker from "../Components/CreateWorker";
import WorkersList from "../Components/WorkersList";
import * as validator from "../Components/Validate";

const StyledInput = styled(Input)`
  border-bottom: 2px solid ${({ theme }) => theme.white};
  &::placeholder {
    color: ${({ theme }) => theme.white};
  }
  &.red {
    border-bottom: 2px solid ${({ theme }) => theme.red};
  }
`;
const Wrapper = styled(StyledDiv)`
  justify-content: flex-end;
  min-height: 100vh;
`;
const CreateCompanyText = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
`;
const StyledSubmitButton = styled(SubmitButton)`
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.white};
`;
const Breaker = styled.div`
  padding: 20px;
`;
const BreakerSmall = styled.div`
  padding: 5px;
`;

const StyledWorkersList = styled.div`
  width: 95%;
  background-color: ${({ theme }) => theme.white};
  height: 450px;
  text-align: center;
  position: relative;
  margin-top: 20px;
`;
const StyledListDescription = styled.div`
  width: 95%;
  height: 40px;
  display: flex;
  position: absolute;
  top: -25px;
`;
const StyledListDescriptionP = styled.p`
color: ${({ theme }) => theme.white};
font-size:color: ${({ theme }) => theme.font.size.s};
width:25%;`;

const StyledError = styled.p`
  color: red;
  margin: 0px;
`;
class CreateCompany extends Component {
  state = {
    clickedButton: false,
    companyName: "",
    workers: [],
    isCompanyNameEmpty: false,
    companyError: false
  };
  handleClick = () => {
    this.setState({
      clickedButton: !this.state.clickedButton
    });
  };
  createWorker = (id, name, surname, salary, position, login, password) => {
    this.state.workers.push({
      id,
      name,
      surname,
      salary,
      position,
      login,
      password,
      dates: []
    });
  };
  showWorkers = () => {
    console.log(this.state.workers);
  };
  closeCreateWorker = () => {
    this.setState({
      clickedButton: !this.state.clickedButton
    });
  };
  handleSubmit = () => {
    const { companyName, isCompanyNameEmpty, workers } = this.state;
    const self = this;
    if (validator.ValidateCompany(companyName, workers, self)) {
      this.props.activeMenu();
      this.props.setName(companyName);
      this.props.setWorkers(workers);
      this.setState({
        companyError: false
      });
    } else {
      this.setState({
        companyError: true
      });
    }
  };
  handleChange = e => {
    const value = e.target.value;
    this.setState({
      companyName: value
    });
  };
  render() {
    return (
      <StyledDiv>
        <BreakerSmall />
        <CreateCompanyText>Create Company</CreateCompanyText>
        <form>
          <label htmlFor="companyName">
            Company Name <br />
            <br />
            <StyledInput
              type="text"
              id="companyName"
              placeholder="Company Name"
              value={this.state.companyName}
              onChange={this.handleChange}
              className={this.state.isCompanyNameEmpty ? "red" : null}
            />
          </label>
        </form>

        <StyledWorkersList>
          <StyledListDescription>
            <StyledListDescriptionP>Name</StyledListDescriptionP>
            <StyledListDescriptionP>Name</StyledListDescriptionP>
            <StyledListDescriptionP>Name</StyledListDescriptionP>
            <StyledListDescriptionP>Name</StyledListDescriptionP>
          </StyledListDescription>
          {this.state.workers.map(worker => (
            <WorkersList
              key={worker.id}
              name={worker.name}
              surname={worker.surname}
              salary={worker.salary}
              position={worker.position}
            />
          ))}

          <SubmitButton onClick={this.handleClick}>Add+</SubmitButton>
        </StyledWorkersList>
        {this.state.clickedButton ? (
          <CreateWorker
            activeCreation={this.state.clickedButton}
            workers={this.state.workers}
            create={this.createWorker}
            show={this.showWorkers}
            close={this.closeCreateWorker}
            handleIdChange={this.props.handleIdChange}
            id={this.props.id}
          />
        ) : null}
        {this.state.companyError ? <StyledError>12312</StyledError> : null}
        <BreakerSmall />

        <StyledSubmitButton onClick={this.handleSubmit}>
          Create
        </StyledSubmitButton>
      </StyledDiv>
    );
  }
}

export default CreateCompany;
