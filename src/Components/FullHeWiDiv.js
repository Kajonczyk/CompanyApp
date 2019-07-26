import styled from "styled-components";
const StyledDiv = styled.div`
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: 100%;
  background-color: ${({ theme }) => theme.green};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default StyledDiv;
