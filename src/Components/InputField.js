import React from "react";
import styled from "styled-components";
const Input = styled.input`
  background: transparent;
  border: 0px;
  border-bottom: 2px solid ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.green};
  transition: all 0.3s;

  &:focus::placeholder {
    transform: translateX(40px);
    opacity: 0;
  }
  &::placeholder {
    transition: all 0.2s;
    opacity: 1;
    color: ${({ theme }) => theme.green};
  }
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.inputDesktop};
  }
`;

export default Input;
