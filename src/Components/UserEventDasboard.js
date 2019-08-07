import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;

const UserEventDasboard = ({ globalEvents }) => {
  console.log(globalEvents);
  const date = new Date().toISOString().substr(0, 10);
  return (
    <StyledDiv>
      {globalEvents.map((event, index) => (
        <div>
          <div>{event.date}</div>
          <div>{event.text}</div>
        </div>
      ))}
    </StyledDiv>
  );
};

export default UserEventDasboard;
