import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const StyledSpinner = styled.div`
  animation: ${rotate360} 0.75s linear infinite;
  transform: translateZ(0);

  border-top: 4px solid #8bb6f5;
  border-right: 4px solid #8bb6f5;
  border-bottom: 4px solid #8bb6f5;
  border-left: 4px solid #ff80ff;
  border-radius: 50%;

  background: transparent;
  width: 35px;
  height: 35px;
`
