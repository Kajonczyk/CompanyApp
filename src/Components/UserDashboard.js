import React, { Component } from "react";
import styled from "styled-components";
import StyledDiv from "../Components/FullHeWiDiv";
import { Tick } from "styled-icons/typicons/Tick";
import history from "../Components/history";
import { Cancel } from "styled-icons/typicons/Cancel";
import { withRouter } from "react-router";

const StyledAttendanceList = styled.div`
  width: 95%;
  background-color: ${({ theme }) => theme.white};
  margin-top: 50px;
  height: 350px;
`;
const StyledAttendanceDiv = styled.div`
  height: 100px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
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
class UserDashboard extends Component {
  state = {
    date: "",
    checkInTime: "",
    checkOutTime: "",
    checkInClicked: false,
    checkOutClicked: false,
    isCheckedIn: false,
    isCheckedOut: false
  };

  handleData = () => {
    const d = new Date();
    return this.setState({
      date: d.toLocaleDateString()
    });
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
  handleTickClick = type => {
    // console.log("tick");
  };
  handleButtonClick = (type, direction) => {
    if (type === "cross") {
      //
      //
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
      console.log(type, direction);

      //
      if (direction === "in") {
        const d = new Date();
        this.setState({
          checkInClicked: !this.state.checkInClicked,
          isCheckedIn: !this.state.isCheckedIn,
          checkInTime: d.toISOString().substr(11, 8)
        });
      } else if (direction === "out") {
        const d = new Date();
        this.setState({
          checkOutClicked: !this.state.checkOutClicked,
          isCheckedOut: !this.state.isCheckedOut,
          checkOutTime: d.toISOString().substr(11, 8)
        });
      }
    }
  };

  render() {
    return (
      <StyledDiv>
        <div>
          <p>You're logged as: </p>
        </div>

        <StyledAttendanceList />

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
            {this.state.isCheckedIn ? this.state.checkInTime : "Check IN"}
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
            {this.state.isCheckedOut ? this.state.checkOutTime : "Check Out"}
          </StyledCheckOut>
        </StyledAttendanceDiv>
      </StyledDiv>
    );
  }
}

export default withRouter(UserDashboard);
