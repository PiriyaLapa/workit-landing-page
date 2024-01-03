import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme} from "../utility";
import Card from "./Card";
import { ContentData } from "../Data/Data";
import ImgMiddleContainer from '../assets/MiddleContainer.png';


const MiddleContainer = styled.div<{ theme: typeof theme; urlImg: {ImgMiddleContainer:string}}>`
  /* width: 1440px; */
  width:100%;
  height: 730px;
  margin: 0 auto;
  /* clip-path: ${(props) => props.theme.HeaderShape}; */
  background-color: ${(props) => props.theme.GhostWhiteColor};
  background-image: url(${(props) => props.urlImg.ImgMiddleContainer});
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
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
      <MiddleContainer theme={theme} urlImg={{ImgMiddleContainer}}>
        <MiddleInnerBox>
          <Card Data={ContentData} />
        </MiddleInnerBox>
      </MiddleContainer>
    );
  }
}
