import React from "react";
import styled from "styled-components";
import { Bin2 } from "styled-icons/icomoon/Bin2";
import { Pencil } from "styled-icons/boxicons-solid/Pencil";
const StyledDiv = styled.div`
  display: flex;
  color: ${({ theme }) => theme.green};
  justify-content: space-between;
  text-align: left;
`;
const DeleteButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: orange;
  line-height: 30px;
`;
const StyledBin = styled.button`
  height: 30px;
  width: 30px;
  padding: 8px;
  margin-left: 50px;
  color: ${({ theme }) => theme.green};
  &:hover {
    cursor: pointer;
  }
`;
const StyledP = styled.p`
  width: 25%;
  overflow: hidden;
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
  deleteUser,
  handleEditUser,
  handleUserChange
}) => {
  function onClickFunctions() {}

  return (
    <StyledDiv>
      <StyledP>{name}</StyledP>
      <StyledP>{surname}</StyledP>
      <StyledP>{salary}</StyledP>
      <StyledP>{position}</StyledP>
      {isVisible ? (
        <>
          <div>
            <StyledBin
              onClick={e => {
                deleteUser(e);
              }}
            />
          </div>
          <div>
            {" "}
            <StyledPencil
              onClick={e => {
                handleEditUser(e);
                handleUserChange();
              }}
            />
          </div>
        </>
      ) : null}
      {/* {isVisible ? (
        <div>
          <StyledPencil
            onClick={e => {
              handleEditUser(e);
            }}
          />
        </div>
      ) : null} */}
    </StyledDiv>
  );
};

export default WorkersList;
