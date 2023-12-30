import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../utility";
import Navbar from "./Navbar";
import ImgContainer from "../assets/Rectangle.png";
import HeroImgSource from '../assets/moblie.png';
import { HeroImg } from "./ImgHero";

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
  border: 1px solid red;
  display: flex;
  align-items: center;
`;


export default class Header extends Component {
  render(): ReactNode {
    return (
      <HeaderContainer theme={theme} urlImg={{ ImgContainer }}>
        <Navbar />
        <InnerBox>
        <h1>HeaderContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quae
          eius harum consectetur alias. Ullam impedit iusto quidem nemo
          deserunt.
        </p>
        {/* <HeroImg urlHero={HeroImgSource} /> */}
      <HeroImg urlImg={HeroImgSource} />
        </InnerBox>
      </HeaderContainer>
    );
  }
}
