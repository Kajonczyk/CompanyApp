import React, { Component } from "react";
import styled from "styled-components";
import WorkersList from "../Components/WorkersList";
import SubmitButton from "../Components/SubmitButton";
import CreateWorker from "../Components/CreateWorker";
import ChangeWorkersData from "../Components/ChangeWorkersData";
import EventDashboard from "../Components/EventDashboard";
import { withRouter } from "react-router";
const StyledDiv = styled.div`
  min-height: 100vh;
  width: 100%;
`;
const StyledWorkersList = styled.div`
  width: 95%;
  background-color: ${({ theme }) => theme.white};
  margin-top: 50px;
  min-height: 100px;
  padding: 0px 20px;
`;
const WorkerPrevievWrapper = styled.div`
  height: 200px;
  width: 100%;
`;
const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.green};
  font-size: ${({ theme }) => theme.font.size.s};
`;
const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
`;
const StyledWorkerPreview = styled.div`
  height: 30px;
  width: 120px;
  background-color: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.white};
  box-shadow: 0px 0px 3px white;
  position: relative;
  box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.green};
  &::before {
    content: "Came";
    position: absolute;
    height: 10px;
    width: 10px;
    left: 45%;
    top: -35%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.green};
  }
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.green};
    &::before {
      content: "Left";
      left: 47%;
    }
  }
`;

class BossDashboard extends Component {
  state = {
    isUserBeingCreated: false,
    clickedButton: false,
    isUserBeingChanged: false
  };
  handleClick = () => {
    this.setState({
      isUserBeingCreated: !this.state.isUserBeingCreated
    });
    console.log(this.props.workers);
  };
  handleForceUpdate = () => {
    this.forceUpdate();
  };
  handleUserChange = () => {
    this.setState({
      isUserBeingChanged: !this.state.isUserBeingChanged
    });
    console.log(this.state.isUserBeingCreated);
  };

  render() {
    return (
      <StyledDiv>
        <div>siema</div>
        <StyledWorkersList>
          {this.props.workers.map(worker => (
            <WorkersList
              key={worker.id}
              name={worker.name}
              surname={worker.surname}
              salary={worker.salary}
              position={worker.position}
              isVisible={true}
              deleteUser={this.props.deleteUser}
              handleEditUser={this.props.handleEditUser}
              handleUserChange={this.handleUserChange}
            />
          ))}
        </StyledWorkersList>
        <SubmitButton onClick={this.handleClick}>Add+</SubmitButton>
        {this.state.isUserBeingCreated ? (
          <CreateWorker
            create={this.props.create}
            close={this.handleClick}
            id={this.props.id}
            handleIdChange={this.props.handleIdChange}
          />
        ) : null}
        {this.state.isUserBeingChanged ? (
          <ChangeWorkersData
            handleUserDataChange={this.props.handleUserDataChange}
            idEditedElement={this.props.idEditedElement}
            handleForceUpdate={this.handleForceUpdate}
          />
        ) : null}

        <WorkerPrevievWrapper>
          <StyledParagraph>Employees Preview</StyledParagraph>
          <select>
            {this.props.workers.map(worker => (
              <option>
                {worker.name} {worker.surname}
              </option>
            ))}
          </select>
          <StyledWrapper>
            <StyledWorkerPreview>Text</StyledWorkerPreview>
            <StyledWorkerPreview>Text</StyledWorkerPreview>
          </StyledWrapper>
        </WorkerPrevievWrapper>
        <EventDashboard handleCreateEvent={this.props.handleCreateEvent} />
        <div>Amount of Employees: {this.props.workers.length}</div>
        <div>Working: {this.props.workers.length}</div>
        <div>Absent: {this.props.workers.length}</div>
      </StyledDiv>
    );
  }
}
export default withRouter(BossDashboard);
