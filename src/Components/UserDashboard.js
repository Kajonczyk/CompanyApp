import React, { Component } from "react";
import styled from "styled-components";
import StyledDiv from "../Components/FullHeWiDiv";
import { Tick } from "styled-icons/typicons/Tick";
import history from "../Components/history";
import { Cancel } from "styled-icons/typicons/Cancel";
import { withRouter } from "react-router";
import SubmitButton from "../Components/SubmitButton";
import UserEventDasboard from "../Components/UserEventDasboard";
import PreviewWorkersData from "../Components/PreviewWorkersData";
import { Redirect } from "react-router-dom";

const StyledAttendanceList = styled.div`
  width: 95%;
  background-color: ${({ theme }) => theme.white};
  margin-top: 50px;
  height: 150px;
`;
const StyledAttendanceDiv = styled.div`
  height: 100px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;
const StyledSection = styled.section`
  z-index: 3;
`;
const StyledCheckIn = styled.div`
  height: 40px;
  width: 130px;
  border: 2px solid ${({ theme }) => theme.white};
  background: transparent;
  color: ${({ theme }) => theme.white};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: ${({ theme }) => theme.font.size.xs};
`;
const StyledCheckOut = styled(StyledCheckIn)`
  background-color: ${({ theme }) => theme.red};
`;
const StyledP = styled.p`
  color: ${({ theme }) => theme.red};
`;
const StyledConfirmDiv = styled.div`
  height: 36px;
  width: 126px;
  background-color: ${({ theme }) => theme.white};
  position: absolute;
  z-index: 1024;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const StyledConfirmButton = styled.div`
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.green};
`;
const StyledTick = styled(Tick)`
  border-bottom: 1px solid ${({ theme }) => theme.green};
`;
const StyledCancel = styled(Cancel)`
  border-bottom: 1px solid ${({ theme }) => theme.green};
`;
const StyledLogOutButton = styled(SubmitButton)`
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.green};
  padding: 5px 10px;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.size.xs};
`;
class UserDashboard extends Component {
  constructor() {
    super();

    this.state = {
      date: "",
      checkInTime: "",
      checkOutTime: "",
      checkInClicked: false,
      checkOutClicked: false,
      isCheckedIn: false,
      isCheckedOut: false,
      auth: true
    };
    const token = localStorage.getItem("userToken");
    if (token === null) {
      console.log("nullon");
    } else this.setState({ auth: true });
  }

  handleData = () => {
    const d = new Date();
    return this.setState({
      date: d.toLocaleDateString()
    });
  };
  handleLogOut = () => {
    localStorage.removeItem("userToken");
    this.props.history.push("/");
  };
  handleCheckClick = status => {
    const {
      checkInClicked,
      checkOutClicked,
      isCheckedIn,
      isCheckedOut
    } = this.state;
    if (status === "in" && !checkInClicked && !isCheckedIn) {
      this.setState({
        checkInClicked: !checkInClicked
      });
    } else if (
      status === "out" &&
      !checkOutClicked &&
      !isCheckedOut &&
      isCheckedIn
    ) {
      this.setState({
        checkOutClicked: !checkOutClicked
      });
    }
  };
  componentDidMount() {
    this.handleData();
    console.log(history.location);
    console.log(this.props);
  }

  handleButtonClick = (type, direction) => {
    //d.toLocaleString().substr(0,9)
    if (type === "cross") {
      if (direction === "in") {
        this.setState({
          checkInClicked: !this.state.checkInClicked
        });
      } else if (direction === "out") {
        this.setState({
          checkOutClicked: !this.state.checkOutClicked
        });
      }
    } else if (type === "tick") {
      //
      console.log(this.props.user, this.props.user.dates);

      //
      if (direction === "in") {
        const d = new Date();
        console.log(this.props.user.id);
        this.setState({
          checkInClicked: !this.state.checkInClicked,
          isCheckedIn: !this.state.isCheckedIn,
          checkInTime: d.toISOString().substr(11, 8)
        });

        console.log(this.state.checkInTime);
        return setTimeout(() => {
          this.props.handleUserDateChange(
            this.props.user.id,
            this.state.date,
            this.state.checkInTime,
            this.state.checkOutTime
          );
        }, 300);
      } else if (direction === "out") {
        const d = new Date();
        this.setState({
          checkOutClicked: !this.state.checkOutClicked,
          isCheckedOut: !this.state.isCheckedOut,
          checkOutTime: d.toISOString().substr(11, 8)
        });
        return setTimeout(() => {
          this.props.handleUserDateChange(
            this.props.user.id,
            this.state.date,
            this.state.checkInTime,
            this.state.checkOutTime
          );
        }, 300);
      }
    }
  };

  render() {
    const { name, surname } = this.props.user;
    // if (localStorage.getItem("userToken") !== null) {
    //   this.setState({
    //     auth: true
    //   });
    //   this.forceUpdate();
    // }
    if (localStorage.getItem("userToken") == null) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <StyledSection>
          <StyledDiv>
            <div>
              <StyledP>
                You're logged as {name} {surname}
              </StyledP>
            </div>

            <StyledAttendanceList>
              <PreviewWorkersData
                user={this.props.user}
                userDates={this.props.user.dates}
                date={this.state.date}
              />
            </StyledAttendanceList>

            <StyledAttendanceDiv>
              <StyledCheckIn onClick={() => this.handleCheckClick("in")}>
                {this.state.checkInClicked ? (
                  <StyledConfirmDiv>
                    <div>
                      <StyledConfirmButton>
                        <StyledTick
                          onClick={() => this.handleButtonClick("tick", "in")}
                        />
                      </StyledConfirmButton>
                    </div>
                    <div>
                      <StyledConfirmButton>
                        <StyledCancel
                          onClick={() => this.handleButtonClick("cross", "in")}
                        />
                      </StyledConfirmButton>
                    </div>
                  </StyledConfirmDiv>
                ) : null}
                {this.state.isCheckedIn ? this.state.checkInTime : "Sign In"}
              </StyledCheckIn>

              <StyledCheckOut onClick={() => this.handleCheckClick("out")}>
                {this.state.checkOutClicked ? (
                  <StyledConfirmDiv>
                    <div>
                      <StyledConfirmButton>
                        <StyledTick
                          onClick={() => this.handleButtonClick("tick", "out")}
                        />
                      </StyledConfirmButton>
                    </div>
                    <div>
                      <StyledConfirmButton>
                        <StyledCancel
                          onClick={() => this.handleButtonClick("cross", "out")}
                        />
                      </StyledConfirmButton>
                    </div>
                  </StyledConfirmDiv>
                ) : null}
                {this.state.isCheckedOut ? this.state.checkOutTime : "Sign Out"}
              </StyledCheckOut>
            </StyledAttendanceDiv>
            <UserEventDasboard globalEvents={this.props.globalEvents} />
            <StyledLogOutButton onClick={this.handleLogOut}>
              Log Out{" "}
            </StyledLogOutButton>
          </StyledDiv>
        </StyledSection>
      </>
    );
  }
}
UserDashboard.defaultProps = {
  user: {
    name: "",
    surname: ""
  }
};
export default withRouter(UserDashboard);
