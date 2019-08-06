import React, { Component } from "react";
import styled from "styled-components";
import Input from "../Components/InputField";
import SubmitButton from "../Components/SubmitButton";
import StyledDiv from "../Components/FullHeWiDiv";
import CreateWorker from "../Components/CreateWorker";
import WorkersList from "../Components/WorkersList";

const StyledInput = styled(Input)`
  border-bottom: 2px solid ${({ theme }) => theme.white};
  &::placeholder {
    color: ${({ theme }) => theme.white};
  }
  &.red {
    border-bottom: 2px solid ${({ theme }) => theme.red};
  }
`;
const StyledSubmitButton = styled(SubmitButton)`
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.white};
`;
// {
//   id: 1,
//   name: "Kaj",
//   surname: "Kajonczyk",
//   salary: "3000",
//   position: "Frontend"
// },
// {
//   id: 2,
//   name: "Kaj",
//   surname: "Kajonczyk",
//   salary: "3000",
//   position: "Frontend"
// },
// {
//   id: 3,
//   name: "Kaj",
//   surname: "Kajonczyk",
//   salary: "3000",
//   position: "Frontend"
// }
const StyledWorkersList = styled.div`
  width: 95%;
  background-color: ${({ theme }) => theme.white};
  margin-top: 50px;
  height: 450px;
`;
class CreateCompany extends Component {
  state = {
    clickedButton: false,
    companyName: "XD",
    workers: [
      {
        id: 0,
        login: "213",
        name: "21312",
        password: "312",
        position: "4",
        salary: "23",
        surname: "3"
      },
      {
        id: 1,
        login: "111",
        name: "222",
        password: "222",
        position: "4",
        salary: "23",
        surname: "3"
      }
    ],
    isCompanyNameEmpty: false
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
      password
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
    if (companyName.length > 0) {
      this.props.activeMenu();
      this.props.setName(companyName);
      this.props.setWorkers(workers);
    } else {
      this.setState({
        isCompanyNameEmpty: !isCompanyNameEmpty
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
        <br />
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
        <StyledSubmitButton onClick={this.handleSubmit}>
          Create
        </StyledSubmitButton>
      </StyledDiv>
    );
  }
}

export default CreateCompany;
