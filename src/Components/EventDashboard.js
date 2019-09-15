import React, { Component } from "react";
import styled from "styled-components";
import SubmitButton from "../Components/SubmitButton";
import * as validator from "../Components/Validate";
const StyledSubmitButton = styled(SubmitButton)`
  border: 2px solid ${({ theme }) => theme.white};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.white};
`;
const StyledDiv = styled.div`
  text-align: center;
`;
const StyledDate = styled.input`
  border: 0px;
  background-color: transparent;
  border-bottom: 2px solid ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.white};
  padding: 5px 10px;

  display: block;
  margin: 0px auto;
  margin-bottom: 15px;
`;
const StyledTextArea = styled.textarea`
  background-color: transparent;
  border: 0px;
  border-bottom: 2px solid ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.white};
  margin-top: 20px;
  margin-bottom: 20px;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.white};
  }
  ${({ theme }) => theme.mq.tablet} {
    width: 450px;
  }
`;
const StyledP = styled.p`
  color: ${({ theme }) => theme.white};
  padding-bottom: 5px;
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;
const StyledConfirmP = styled.p`
  color: lawngreen;
  opacity: 0;
  margin-top: -5px;
  transition: all 0.3s;
  &.active {
    opacity: 1;
  }
`;

class EventDashboard extends Component {
  state = {
    value: "",
    date: "",
    errors: {
      dateError_: false,
      valueError_: false
    },
    activeConfirm: false
  };
  handleChange = (e, type) => {
    let value = e.target.value;
    type = e.target.type;

    if (type === "date") {
      this.setState({
        date: value
      });
    } else {
      this.setState({
        value
      });
    }
  };

  handleCreateEvent_ = () => {
    const { value, date } = this.state;

    const self = this;
    this.setState({
      errors: {
        dateError_: false,
        valueError_: false
      }
    });

    if (validator.ValidateGlobalEvent(value, date, self)) {
      this.props.handleCreateEvent(value, date);
      this.setState({
        value: "",
        activeConfirm: true
      });
      return setTimeout(() => {
        this.setState({
          activeConfirm: false
        });
      }, 3000);
    }
  };

  render() {
    return (
      <StyledDiv>
        <StyledP>Create Event</StyledP>
        <StyledDate type="date" onChange={this.handleChange} />
        <StyledTextArea
          name="event"
          id="event"
          cols="35"
          rows="5"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Your text goes here"
        />
        <StyledConfirmP className={this.state.activeConfirm ? "active" : ""}>
          Event Created
        </StyledConfirmP>
        <StyledSubmitButton onClick={() => this.handleCreateEvent_()}>
          Submit
        </StyledSubmitButton>
      </StyledDiv>
    );
  }
}

export default EventDashboard;
