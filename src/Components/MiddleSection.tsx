import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme} from "../utility";
import Card from "./Card";
import { ContentData } from "../Data/Data";
import ImgMiddleContainer from '../assets/MiddleContainer.png';


const MiddleContainer = styled.div<{ theme: typeof theme; urlImg: {ImgMiddleContainer:string}}>`
  width:100%;
  height: 1300px;
  margin: 0 auto;
  background-image: url(${(props) => props.urlImg.ImgMiddleContainer});
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  position: relative;
  top: -70px;
  z-index: -1;
  
`;
const MiddleInnerBox = styled.div`
  width:80%;
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
