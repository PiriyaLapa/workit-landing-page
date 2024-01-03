import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme} from "../utility";
import Card from "./Card";
import { ContentData } from "../Data/Data";

const MiddleContainer = styled.div<{ theme: typeof theme }>`
  width: 1440px;
  height: 730px;
  margin: 0 auto;
  clip-path: ${(props) => props.theme.HeaderShape};
  background-color: ${(props) => props.theme.GhostWhiteColor};
  position: relative;
  top: -70px;
  z-index: -1;
`;
const MiddleInnerBox = styled.div`
  width:1114px;
  height:auto;
  display:flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

`;

export default class MiddleSection extends Component {
  render(): ReactNode {
    return (
      <MiddleContainer theme={theme}>
        <MiddleInnerBox>
          <Card Data={ContentData} />
        </MiddleInnerBox>
      </MiddleContainer>
    );
  }
}
