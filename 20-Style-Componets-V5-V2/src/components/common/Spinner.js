import styled, { keyframes } from "styled-components";

const rotation = keyframes`
from{
    transform : rotate(0deg);
}
to{
    
    transform : rotate(360deg);
}
`;

const Spinner = styled.div`
  height: 30px;
  width: 30px;
  border: 3px solid;
  color: ${(p) => (p.success ? p.theme.primaryColor : p.theme.secondaryColor)};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 1s linear infinite;
`;

export { Spinner };
