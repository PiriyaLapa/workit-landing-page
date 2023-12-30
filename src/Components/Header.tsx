import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../utility";
import Navbar from "./Navbar";
// import ImgContainer from "../assets/Rectangle.png";
// import HeroImgSource from "../assets/moblie.png";
// import { HeroImg } from "./ImgHero";
// import { PrimaryBtn } from "./ButtonComponents";

const HeaderContainer = styled.div<{
  theme: typeof theme;
}>`
  width: 1440px;
  height: 730px;
  margin: 0 auto;
  clip-path: ${(props) => props.theme.HeaderShape};
  background-color: ${(props) => props.theme.darkPurpleColor};
`;

// const InnerBox = styled.div`
//   display: block;
//   align-items: center;
//   * {
//     margin: 38px auto;
//   }
// `;

// const TitleHeader = styled.span`
//   width: 40%;
//   height: auto;
//   font-family: "Fraunces 144pt";
//   font-size: 80px;
//   font-weight: 100;
//   line-height: 80px;
//   text-align: center;
//   display: block;
//   margin-top: 50px;
//   color: white;
//   margin: 50px auto;
// `;

export default class Header extends Component {
  render(): ReactNode {
    return (
        <HeaderContainer theme={theme}>
          <Navbar />
          {/* <InnerBox>
            <TitleHeader>Data tailored to your deep.</TitleHeader>
            <PrimaryBtn />
          <HeroImg urlImg={HeroImgSource} />
          </InnerBox> */}
        </HeaderContainer>
    );
  }
}
