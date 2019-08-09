import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.white};
  color: black;
  overflow: hidden;
  overflow-y: scroll;
`;
const StyledSingleEventDiv = styled.div`
  width: 100%;
  padding: 20px 0px;
  border-bottom: 2px solid ${({ theme }) => theme.green};
  font-size: ${({ theme }) => theme.font.size.xs};
`;

const UserEventDasboard = ({ globalEvents }) => {
  return (
    <StyledDiv>
      {globalEvents.length > 0
        ? globalEvents.map(event => (
            <StyledSingleEventDiv>
              <div>{event.date.date}</div>
              <div>{event.date.text}</div>
            </StyledSingleEventDiv>
          ))
        : null}
    </StyledDiv>
  );
};

export default UserEventDasboard;
