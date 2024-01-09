import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme, fonts, contentCard, btnMessage } from "../utility";
import ProfileImg from "../assets/Profile_picture.png";
import { PrimaryBtn } from "./ButtonComponents";
import SpringUrl from "../assets/Spring3.png";
import IconImg from "../assets/IconImg.png";

const LastedContainer = styled.div<{ theme: typeof theme }>`
  width: 100%;
  height: 500px;
  background-color: ${(props) => props.theme.WhiteColor};
`;

const StyleProfile = styled.img`
  width: 35%;
  height: auto;
  @media only screen and (max-width: 768px) {
    width: 40%;
    float: left;
  }
`;

interface urlImgProps {
  urlImg: string;
}

class Profile extends Component<urlImgProps> {
  render(): ReactNode {
    const { urlImg } = this.props;
    return <StyleProfile src={urlImg} alt="ProfileImg" />;
  }
}

const InnerBox = styled.div`
  width: 69.5%;
  height: 674.74px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;

const StyleCardContent = styled.div<{
  theme: typeof theme;
  fonts: typeof fonts;
}>`
  background-color: ${(props) => props.theme.darkPurpleColor};
  color: ${(props) => props.theme.WhiteColor};
  width: 55%;
  height: 410px;
  float: right;
  text-align: left;
  padding: 5%;
  position: relative;
  left: -11%;
  top: 26%;
  line-height: 2em;

  * {
    margin: 0.6em 0;
  }

  :nth-child(3) {
    width: 40%;
    margin-top: 8%;
    float: left;
  }
  @media only screen and (max-width: 768px) {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-67%, -115%);
    width: 75%;
  }
`;

const TitleCard = styled.h1<{ fonts: typeof fonts }>`
  font-family: ${(props) => props.fonts.PrimaryFont};
  float: left;
  display: block;
`;

const Content = styled.p<{ fonts: typeof fonts }>`
  font-family: ${(props) => props.fonts.SecondaryFont};
  display: block;
  float: left;
`;

interface ContentProps {
  title: string;
  content: string;
}

interface BtnMsgProps {
  btnNavMgs: string;
  btnHeadMgs: string;
}
class CardContent extends Component<{
  data: ContentProps;
  btnMsg: BtnMsgProps;
}> {
  render(): ReactNode {
    const { title, content } = this.props.data;
    const { btnNavMgs } = this.props.btnMsg;
    return (
      <StyleCardContent theme={theme} fonts={fonts}>
        <TitleCard fonts={fonts}>{title}</TitleCard>
        <Content fonts={fonts}>{content}</Content>
        <PrimaryBtn message={btnNavMgs} fontWeight={400} />
        <SpringImg urlImg={SpringUrl} />
      </StyleCardContent>
    );
  }
}
const StyledSpringImg = styled.img`
  width: 30%;
  height: auto;
  position: relative;
  top: 15px;
  left: 20%;
  @media only screen and (max-width: 768px) {
    width: 45%;
  }
`;

interface SpringProps {
  urlImg: string;
}

class SpringImg extends Component<SpringProps> {
  render(): ReactNode {
    const { urlImg } = this.props;
    return <StyledSpringImg src={urlImg} alt="SpringImg" />;
  }
}

interface IconProps {
  urlImg: string;
}
const StyledIcon = styled.img`
  width: 5%;
  height: auto;
  margin: 5% auto;
  @media only screen and (max-width: 768px) {
    width: 13%;
    height: auto;
    margin: 10% auto;
    position: relative;
    top:50%;
    left:50%;
    transform:translate(-100%,-310%);
  }
`;

class Icon extends Component<IconProps> {
  render(): ReactNode {
    const { urlImg } = this.props;
    return <StyledIcon src={urlImg} alt="Iconsim" />;
  }
}

export class LastedSection extends Component {
  render(): ReactNode {
    return (
      <LastedContainer theme={theme}>
        <InnerBox>
          <Profile urlImg={ProfileImg} />
          <CardContent data={contentCard} btnMsg={btnMessage} />
        </InnerBox>
        <Icon urlImg={IconImg} />
      </LastedContainer>
    );
  }
}
