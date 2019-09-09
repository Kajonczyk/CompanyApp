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
  margin-bottom: 15px;
`;
const StyledTextArea = styled.textarea`
  background-color: transparent;
  border: 0px;
  border-bottom: 2px solid ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.white};
  padding-top: 10px;
  &::placeholder {
    color: ${({ theme }) => theme.white};
    text-align: center;
  }
`;
const StyledP = styled.p`
  color: ${({ theme }) => theme.white};
  padding-bottom: 5px;
`;
class EventDashboard extends Component {
  state = {
    value: "",
    date: "",
    errors: {
      dateError_: false,
      valueError_: false
    }
  };
  handleChange = (e, type) => {
    let value = e.target.value;
    type = e.target.type;

    if (type === "date") {
      console.log(value);
      this.setState({
        date: value
      });
    } else {
      this.setState({
        value
      });
    }
    console.log(type);
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
        <StyledSubmitButton onClick={() => this.handleCreateEvent_()}>
          Submit
        </StyledSubmitButton>
      </StyledDiv>
    );
  }
}

export default EventDashboard;
