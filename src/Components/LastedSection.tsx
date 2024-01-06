import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme, fonts, contentCard, btnMessage } from "../utility";
import ProfileImg from "../assets/Profile_picture.png";
import { PrimaryBtn } from "./ButtonComponents";

const LastedContainer = styled.div<{ theme: typeof theme }>`
  width: 100%;
  height: 500px;
  background-color: ${(props) => props.theme.WhiteColor};
`;

const StyleProfile = styled.img`
  width: 35%;
  height: auto;
`;

interface urlImgProps {
  urlImg: string;
};

class Profile extends Component<urlImgProps> {
  render(): ReactNode {
    return <StyleProfile src={this.props.urlImg} alt="ProfileImg" />;
  }
}

const InnerBox = styled.div`
  width: 69.50%;
  height: 674.74px;
  margin: 0 auto;
`;

const StyleCardContent = styled.div<{
  theme: typeof theme;
  fonts: typeof fonts;
}>`
  background-color: ${(props) => props.theme.darkPurpleColor};
  color: ${(props) => props.theme.WhiteColor};
  width: 55%;
  height: auto;
  float: right;
  text-align: left;
  padding: 5%;
  * {
    margin: 0.3em 0;
  }
  :nth-child(3) {
    width: 40%;
    margin-top: 8%;
    float: left;
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
        <PrimaryBtn message={btnNavMgs} />
      </StyleCardContent>
    );
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
      </LastedContainer>
    );
  }
}
