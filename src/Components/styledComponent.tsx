import styled from "styled-components";

export const ContainerLandingPage = styled.div<{ $inputColor?: string }>`
  /* width: 1440px; */
  width: auto;
  height: auto;
  background-color: ${(props) => props.$inputColor || props.theme.secondaryColor};
  margin: 0 auto;
`;
