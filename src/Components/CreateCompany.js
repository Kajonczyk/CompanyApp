import React, { Component } from "react";
import styled from "styled-components";
import Input from "../Components/InputField";
import SubmitButton from "../Components/SubmitButton";
import StyledDiv from "../Components/FullHeWiDiv";
import CreateWorker from "../Components/CreateWorker";
import WorkersList from "../Components/WorkersList";
import StyledError from "../Components/StyledError";

import StyledListDescription from "../Components/StyledListDescription";
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
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.ml};
  }
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

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.white};
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xs};
  }
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
        <StyledListDescription />

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

        <BreakerSmall />
        {this.state.companyError ? (
          <StyledError>
            Company name must be between 2-15 and workers can't be empty
          </StyledError>
        ) : null}
        <StyledSubmitButton onClick={this.handleSubmit}>
          Create
        </StyledSubmitButton>
      </StyledDiv>
    );
  }
}

export default CreateCompany;
