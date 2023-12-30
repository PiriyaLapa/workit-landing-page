import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../utility";
import Navbar from "./Navbar";
import ImgContainer from "../assets/Rectangle.png";
import HeroImgSource from "../assets/moblie.png";
import { HeroImg } from "./ImgHero";
import { PrimaryBtn } from "./ButtonComponents";

const HeaderContainer = styled.div<{
  theme: typeof theme;
  urlImg: { ImgContainer: string };
}>`
  width: 1440px;
  height: 730px;
  background-image: url(${(props) => props.urlImg.ImgContainer});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: ${(props) => props.theme.WhiteColor};
  margin: 0 auto;
`;

const InnerBox = styled.div`
  display: block;
  align-items: center;
  * {
    margin: 0 auto;
  }
  :nth-child(2){
    margin: 80px 0;
  }
`;

const TitleHeader = styled.span`
  width: 40%;
  height: auto;
  font-family: "Fraunces 144pt";
  font-size: 80px;
  font-weight: 100;
  line-height: 80px;
  text-align: center;
  display: block;
  margin-top: 50px;
`;

export default class Header extends Component {
  render(): ReactNode {
    return (
      <HeaderContainer theme={theme} urlImg={{ ImgContainer }}>
        <Navbar />
        <InnerBox>
          <TitleHeader>Data tailored to your need.</TitleHeader>
          <PrimaryBtn />
          <HeroImg urlImg={HeroImgSource} />
        </InnerBox>
      </HeaderContainer>
    );
  }
}
