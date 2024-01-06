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
`;


const StyleCardContent = styled.div<{theme:typeof theme, fonts:typeof fonts}>`
    background-color:${(props) => props.theme.darkPurpleColor};
    color:${(props) => props.theme.WhiteColor};
  `;

class CardContent extends Component {
  render(): ReactNode {
    return (
      <StyleCardContent theme={theme} fonts={fonts}>
        <TitleCard fonts={fonts}>Be the first to be test</Title>
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
          <h1>Lorem ipsum dolor sit amet.</h1>
          <Profile urlImg={ProfileImg} />
          <CardContent />
        </InnerBox>
      </LastedContainer>
    );
  }
}
