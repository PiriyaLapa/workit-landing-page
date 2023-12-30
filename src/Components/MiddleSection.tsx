import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../utility";

const MiddleContainer = styled.div<{ theme: typeof theme }>`
  width: 1440px;
  height: 730px;
  margin: 0 auto;
  clip-path: ${(props) => props.theme.HeaderShape};
  background-color: ${(props) => props.theme.GhostWhiteColor};
`;

export default class MiddleSection extends Component {
  render(): ReactNode {
    return (
      <MiddleContainer theme={theme}>
        <h1>Hello Middle section</h1>
      </MiddleContainer>
    );
  }
}
