import React, { Component } from "react";
import styled from "styled-components";
import Input from "../Components/InputField";
const StyledWrapper = styled.div`
  height: 50vh;
  width: 100%;
  background-color: lawngreen;
`;
class ChangeWorkersData extends Component {
  state = {
    name: "",
    surname: "",
    salary: "",
    position: ""
  };
  handleChange = e => {
    const id = e.target.id;
    const value = e.target.value;

    this.setState({
      [id]: value
    });
  };

  render() {
    const { name, surname, salary, position } = this.state;
    return (
      <StyledWrapper>
        <div>XD</div>
        <Input id="name" value={name} onChange={this.handleChange} />
        <Input id="surname" value={surname} onChange={this.handleChange} />
        <Input id="salary" value={salary} onChange={this.handleChange} />
        <Input id="position" value={position} onChange={this.handleChange} />
        <button
          onClick={() =>
            this.props.handleUserDataChange(
              this.props.idEditedElement,
              name,
              surname,
              salary,
              position
            )
          }
        >
          Submit
        </button>
      </StyledWrapper>
    );
  }
}

export default ChangeWorkersData;
