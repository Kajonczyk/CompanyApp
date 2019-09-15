import React from "react";
import styled from "styled-components";
const StyledWrapper = styled.div`
  width: 100px;
  flex-wrap: wrap;
  position: absolute;
  left: -6.2%;
  top: 95%;
  transform: rotateZ(-45deg);
  display: none;
  &:nth-of-type(2) {
    left: 93.8%;
    top: -5%;
  }
  &:nth-of-type(3) {
    top: -5%;
  }
  &:nth-of-type(4) {
    left: 93.8%;
    top: 95%;
  }
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
  }
`;
const StyledDot = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${({ theme }) => theme.white};
  padding: 5px;
  display: block;
  margin: 5px;
  border-radius: 50%;
  box-shadow: 0px 0px 3px ${({ theme }) => theme.white};
`;
const renderDots = () => {
  const dots = [];

  for (let i = 0; i < 9; i++) {
    dots.push(<StyledDot />);
  }
  return dots;
};

const StyledDots = () => {
  return <StyledWrapper>{renderDots()}</StyledWrapper>;
};
export default StyledDots;
