import React, { Component } from "react";
import styled from "styled-components";
import SubmitButton from "../Components/SubmitButton";

class EventDashboard extends Component {
  state = {
    value: "",
    date: ""
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
        />
        <SubmitButton onClick={() => this.props.handleCreateEvent(value, date)}>
          Submit
        </SubmitButton>
      </div>
    );
  }
}

export default EventDashboard;
