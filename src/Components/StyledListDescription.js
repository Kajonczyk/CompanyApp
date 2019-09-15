import React from "react";
import styled from "styled-components";

export const ListWrapper = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  margin-bottom: -20px;
`;
const ListP = styled.p`
  color: ${({ theme }) => theme.white};
  margin: 0px;

  font-size: ${({ theme }) => theme.font.size.xxs};
  width: 25%;
  text-align: justify;
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;

const StyledListDescription = () => {
  return (
    <ListWrapper>
      <ListP>Name</ListP>
      <ListP>Surname</ListP>
      <ListP>Salary</ListP>
      <ListP>Position</ListP>
    </ListWrapper>
  );
};
export default StyledListDescription;
