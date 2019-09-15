import React from "react";
import styled from "styled-components";
const SubmitButton = styled.button`
  padding: 5px 10px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.green};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.green};
  border-radius: 10px;
  display: block;
  margin: 15px auto;
  color: ${({ theme }) => theme.green};
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 0px 2px 3px ${({ theme }) => theme.green};
  }
  ${({ theme }) => theme.mq.tablet} {
    padding: 6px 14px;
    font-size: ${({ theme }) => theme.font.size.inputDesktop};

    &:hover {
      box-shadow: 0px 2px 4px ${({ theme }) => theme.green};
    }
  }
`;

export default SubmitButton;
