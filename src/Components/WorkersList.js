import React from "react";
import styled from "styled-components";
import { Bin2 } from "styled-icons/icomoon/Bin2";
import { Pencil } from "styled-icons/boxicons-solid/Pencil";
const StyledDiv = styled.div`
  display: flex;
  color: ${({ theme }) => theme.green};
  justify-content: space-between;
  text-align: center;
`;
const DeleteButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: orange;
  line-height: 30px;
`;
const StyledBin = styled(Bin2)`
  height: 30px;
  width: 30px;
  padding: 8px;
  margin-left: 50px;
  color: ${({ theme }) => theme.green};
  &:hover {
    cursor: pointer;
  }
`;
const StyledPencil = styled(Pencil)`
  height: 30px;
  margin-left: -15px;
  width: 30px;
  padding: 8px;
  color: ${({ theme }) => theme.green};
  &:hover {
    cursor: pointer;
  }
`;
const WorkersList = ({
  name,
  surname,
  salary,
  position,
  isVisible,
  deleteUser
}) => {
  return (
    <StyledDiv>
      <p>{name}</p>
      <p>{surname}</p>
      <p>{salary}</p>
      <p>{position}</p>
      {isVisible ? <StyledBin onClick={() => deleteUser()} /> : null}
      {isVisible ? <StyledPencil /> : null}
    </StyledDiv>
  );
};
export default WorkersList;
