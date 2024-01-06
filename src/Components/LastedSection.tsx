import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme, fonts } from "../utility";
import ProfileImg from "../assets/Profile_picture.png";
import { PrimaryBtn } from "./ButtonComponents";

const LastedContainer = styled.div<{ theme: typeof theme }>`
  width: 100%;
  height: 500px;
  background-color: ${(props) => props.theme.WhiteColor};
`;

const StyleProfile = styled.img`
  width: 20%;
  height: auto;
`;

interface urlImgProps {
  urlImg: string;
}

class Profile extends Component<urlImgProps> {
  render(): ReactNode {
    return <StyleProfile src={this.props.urlImg} alt="ProfileImg" />;
  }
}

const InnerBox = styled.div`
  width: 1112px;
  height: 674.64;
  margin: 0 auto;
`;

const StyleCardContent = styled.div<{
  theme: typeof theme;
  fonts: typeof fonts;
}>`
  background-color: ${(props) => props.theme.darkPurpleColor};
  color: ${(props) => props.theme.WhiteColor};
`;

const TitleCard = styled.h1<{ fonts: typeof fonts }>`
  font-family: ${(props) => props.fonts.PrimaryFont};
`;

const Content = styled.p<{ fonts: typeof fonts }>`
  font-family: ${(props) => props.fonts.SecondaryFont};
`;

class CardContent extends Component {
  render(): ReactNode {
    return (
      <StyleCardContent theme={theme} fonts={fonts}>
        <TitleCard fonts={fonts}>Be the first to be test</TitleCard>
        <Content fonts={fonts}>
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </Content>
        <PrimaryBtn />
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
          <CardContent />
        </InnerBox>
      </LastedContainer>
    );
  }
}
