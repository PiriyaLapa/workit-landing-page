import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../utility";
import Navbar from "./Navbar";
import { PrimaryBtn } from "./ButtonComponents";
import ImgContainer from "../assets/Rectangle.png";
import { HeroImg, LineImg } from "./ImgHero";
import HeroImgSource from "../assets/moblie.png";
import BigSpringImg from "../assets/BigString.png";
import SmallPringImg from "../assets/SmallSpring.png";
import Line from "../assets/line.png";

const HeaderContainer = styled.div<{
  theme: typeof theme;
  urlImg: { ImgContainer: string };
}>`
  width: 100%;
  height: 1000px;
  background-image: url(${(props) => props.urlImg.ImgContainer});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: ${(props) => props.theme.WhiteColor};
  margin: 0 auto;
  background-color: ${(props) => props.theme.GhostWhiteColor};
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
  margin: 120px auto 100px auto;
  @media only screen and (max-width: 768px) {
    width: 80%;
    ::after {
      content: "tailored";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: red;
    }
  }
`;

interface SpringProps {
  urlImg: string;
}
const StyleSpring = styled.img`
  position: absolute;
  top: 40%;
  left: -1px;
  @media only screen and (max-width: 768px) {
    top: 23%;
    left: -70px;
  }
`;

const StyledSmallSpring = styled(StyleSpring)`
  top: 45%;
  left: 93%;
  @media only screen and (max-width: 1400px) {
    left: 89%;
  }
  @media only screen and (max-width: 990px) {
    left: 88%;
  }
  @media only screen and (max-width: 768px) {
    left: 83%;
  }
  @media only screen and (max-width: 733px) {
    left: 72%;
  }
  @media only screen and (max-width: 700px) {
    left: 82%;
  }
`;

class BigSpring extends Component<SpringProps> {
  render(): ReactNode {
    const { urlImg } = this.props;
    return <StyleSpring src={urlImg} alt="springImg" />;
  }
}

class SmallSpring extends Component<SpringProps> {
  render(): ReactNode {
    const { urlImg } = this.props;
    return <StyledSmallSpring src={urlImg} alt="small spring" />;
  }
}

export default class Header extends Component {
  render(): ReactNode {
    return (
      <HeaderContainer theme={theme} urlImg={{ ImgContainer }}>
        <Navbar />
        <InnerBox>
          <TitleHeader>Data tailored to your needs.</TitleHeader>
          <PrimaryBtn message="Learn more" />
          <HeroImg urlImg={HeroImgSource} />
          <LineImg urlImg={Line} />
        </InnerBox>
        <BigSpring urlImg={BigSpringImg} />
        <SmallSpring urlImg={SmallPringImg} />
      </HeaderContainer>
    );
  }
}
