import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../utility";
import Navbar from "./Navbar";
import { PrimaryBtn } from "./ButtonComponents";
import ImgContainer from "../assets/Rectangle.png";
import { HeroImg } from "./ImgHero";
import  HeroImgSource  from "../assets/moblie.png";

// const HeaderContainer = styled.div<{
//   theme: typeof theme;
// }>`
//   test 1
//   width: 1440px;
//   height: 730px;
//   margin: 0 auto;
//   clip-path: ${(props) => props.theme.HeaderShape};
//   background-color: ${(props) => props.theme.darkPurpleColor};
//   z-index:1;
// `;

const HeaderContainer = styled.div<{
  theme: typeof theme;
  urlImg: { ImgContainer: string };
}>`
  width: 100%;
  // height: auto;
  height:1000px;
  background-image: url(${(props) => props.urlImg.ImgContainer});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: ${(props) => props.theme.WhiteColor};
  margin: 0 auto;
  background-color:${(props) => props.theme.GhostWhiteColor};
`;

const InnerBox = styled.div`
  display: block;
  align-items: center;
  * {
    margin: 38px auto;
  }
`;

const TitleHeader = styled.span`
  width: 30%;
  height: auto;
  font-family: "Fraunces 144pt";
  font-size: 80px;
  font-weight: 100;
  line-height: 80px;
  text-align: center;
  display: block;
  color: white;
  margin:120px auto 100px auto;
`;

export default class Header extends Component {
  render(): ReactNode {
    return (
      // <HeaderContainer theme={theme} style={{zIndex:2}}>
      <HeaderContainer theme={theme} urlImg={{ ImgContainer }}>
        <Navbar />
        <InnerBox>
          <TitleHeader>Data tailored to your deep.</TitleHeader>
          <PrimaryBtn />
          <HeroImg urlImg={HeroImgSource} />
        </InnerBox>
      </HeaderContainer>
    );
  }
}
