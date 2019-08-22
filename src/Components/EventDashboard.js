import React, { Component } from "react";
import styled from "styled-components";
import SubmitButton from "../Components/SubmitButton";
import * as validator from "../Components/Validate";

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
    const { value, date } = this.state;
    return (
      <div>
        <p>Create Event</p>
        <input type="date" onChange={this.handleChange} />
        <textarea
          name="event"
          id="event"
          cols="35"
          rows="5"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Your text goes here"
        />
        <SubmitButton onClick={() => this.handleCreateEvent_()}>
          Submit
        </SubmitButton>
      </div>
    );
  }
}

export default EventDashboard;
