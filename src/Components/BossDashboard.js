import React, { Component } from "react";
import styled from "styled-components";
import WorkersList from "../Components/WorkersList";
import SubmitButton from "../Components/SubmitButton";
import CreateWorker from "../Components/CreateWorker";
import ChangeWorkersData from "../Components/ChangeWorkersData";
import EventDashboard from "../Components/EventDashboard";
import { Redirect } from "react-router-dom";
import StyledDiv from "../Components/FullHeWiDiv";

import { withRouter } from "react-router";
const StyledDiv_ = styled(StyledDiv)`
  height: auto;
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
const StyledLogOutButton = styled(SubmitButton)`
  border: 2px solid ${({ theme }) => theme.white};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.white};
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

  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.green};
  &::before {
    content: "Left";
    left: 47%;
  }
`;

class BossDashboard extends Component {
  constructor() {
    super();
    this.state = {
      isUserBeingCreated: false,
      clickedButton: false,
      isUserBeingChanged: false,
      workerIdPreview: null,
      selectValue: 0,
      date: null,
      auth: false,
      some: ""
    };

    const token = localStorage.getItem("bossToken");
    if (token === null) {
      console.log("nullon");
    } else this.setState({ auth: true });
  }

  handleClick = () => {
    this.setState({
      isUserBeingCreated: !this.state.isUserBeingCreated
    });
    console.log(this.props.workers);
  };
  componentDidMount() {
    const d = new Date();
    this.setState({
      date: d.toLocaleDateString()
    });
  }
  handleLogOut = () => {
    localStorage.removeItem("bossToken");
    this.props.history.push("/");
  };
  handleForceUpdate = () => {
    // this.forceUpdate();
  };
  handleUserChange = () => {
    this.setState({
      isUserBeingChanged: !this.state.isUserBeingChanged
    });
    console.log(this.state.isUserBeingCreated);
  };
  updateText = (type, text) => {
    if (type === "in") {
      return text;
    } else if (type === "out") {
      return text;
    }
  };
  FilterWorkers = type => {
    let filtered;
    filtered = this.props.workers.filter(worker => worker.dates.length == 0);

    if (type === "absent") {
      return filtered.length;
    } else {
      console.log("other");
      return this.props.workers.length - filtered.length;
    }
  };
  handleSelectChange = e => {
    console.log(e.target.value);
    this.setState({
      selectValue: e.target.value
    });
    setTimeout(() => {
      const text = this.props.workers[this.state.selectValue].dates[
        this.state.date
      ];

      this.updateText("in", text);
    }, 500);
  };

  render() {
    if (localStorage.getItem("bossToken") == null) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <StyledDiv_>
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
            <select onChange={this.handleSelectChange}>
              <option disabled={true} selected={true}>
                Choose Employee
              </option>
              {this.props.workers.map(worker => (
                <option value={worker.id} key={worker.id}>
                  {worker.name} {worker.surname}
                </option>
              ))}
            </select>
            <StyledWrapper>
              <StyledWorkerPreview>
                {/* It ain't working for now */}
                {/* {this.state.selectValue &&
                Boolean(
                  this.props.workers[this.state.selectValue].dates[
                    this.state.date
                  ]
                )
                  ? this.props.workers[this.state.selectValue].dates[
                      this.state.date
                    ].signIn
                  : "Data not set"} */}
                {/* {typeof this.props.workers[this.state.selectValue].dates ==
                undefined
                  ? console.log("null")
                  : this.props.workers[this.state.selectValue].dates[0].signIn} */}
              </StyledWorkerPreview>
              <StyledWorkerPreview>
                {this.state.selectValue &&
                Boolean(
                  this.props.workers[this.state.selectValue].dates[
                    this.state.date
                  ]
                )
                  ? this.props.workers[this.state.selectValue].dates[
                      this.state.date
                    ].signOut
                  : "Data not set"}
              </StyledWorkerPreview>
            </StyledWrapper>
          </WorkerPrevievWrapper>
          <EventDashboard handleCreateEvent={this.props.handleCreateEvent} />
          <div>Amount of Employees: {this.props.workers.length}</div>
          <div>Working:{this.FilterWorkers()}</div>
          <div>Absent: {this.FilterWorkers("absent")}</div>
          <StyledLogOutButton onClick={this.handleLogOut}>
            Log Out
          </StyledLogOutButton>
        </StyledDiv_>
      </>
    );
  }
}
BossDashboard.defaultProps = {};
export default withRouter(BossDashboard);
