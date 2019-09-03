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
  padding: 3px;
  color: ${({ theme }) => theme.white};
  &::placeholder {
    color: ${({ theme }) => theme.white};
  }
`;

const CreateCompanyText = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
  color: ${({ theme }) => theme.white};
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
  overflow-y: scroll;
`;
const StyledListDescription = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  margin-bottom: -20px;
`;
const StyledListDescriptionP = styled.p`
  color: ${({ theme }) => theme.white};
  margin: 0px;

  font-size: ${({ theme }) => theme.font.size.xxs};
  width: 25%;
  text-align: justify;
`;

const StyledError = styled.p`
  color: red;
  margin: 0px;
`;
const StyledSpan = styled.span`
  color: ${({ theme }) => theme.white};
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
    const { companyName, workers } = this.state;
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
        <BreakerSmall />
        <form>
          <label htmlFor="companyName">
            <StyledSpan>Company Name</StyledSpan>
            <BreakerSmall />
            <StyledInput
              type="text"
              id="companyName"
              placeholder="Company Name"
              value={this.state.companyName}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <Breaker />
        <StyledListDescription>
          <StyledListDescriptionP>Name</StyledListDescriptionP>
          <StyledListDescriptionP>Surname</StyledListDescriptionP>
          <StyledListDescriptionP>Salary</StyledListDescriptionP>
          <StyledListDescriptionP>Position</StyledListDescriptionP>
        </StyledListDescription>
        <StyledWorkersList>
          <BreakerSmall />
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
