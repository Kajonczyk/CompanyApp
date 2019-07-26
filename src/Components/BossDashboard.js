import React, { Component } from "react";
import styled from "styled-components";
import WorkersList from "../Components/WorkersList";
import SubmitButton from "../Components/SubmitButton";
import CreateWorker from "../Components/CreateWorker";

const StyledDiv = styled.div`
  height: 100vh;
  width: 100%;
`;
const StyledWorkersList = styled.div`
  width: 95%;
  background-color: ${({ theme }) => theme.white};
  margin-top: 50px;
  min-height: 100px;
  padding: 0px 20px;
`;

class BossDashboard extends Component {
  state = {
    isUserBeingCreated: false,
    clickedButton: false
  };
  handleClick = () => {
    this.setState({
      isUserBeingCreated: !this.state.isUserBeingCreated
    });
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
            />
          ))}
        </StyledWorkersList>
        <SubmitButton onClick={this.handleClick}>Add+</SubmitButton>
        {this.state.isUserBeingCreated ? (
          <CreateWorker create={this.props.create} close={this.handleClick} />
        ) : null}
      </StyledDiv>
    );
  }
}
export default BossDashboard;
