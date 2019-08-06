import React from "react";
import styled from "styled-components";
const Input = styled.input`
  background: transparent;
  border: 0px;
  border-bottom: 2px solid ${({ theme }) => theme.green};

  &:focus::placeholder {
    transform: translateX(40px);
    opacity: 0;
  }
  &::placeholder {
    transition: all 0.2s;
    opacity: 1;
    color: ${({ theme }) => theme.green};
  }
`;

export default Input;
