import { Component, ReactNode } from "react";
import styled from "styled-components";

interface ImgHeroProps {
  urlImg: string;
}

const StyledHeroImg = styled.img`
  width: 55%;
  height: auto;
  display: block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-90%, 30%);

  @media only screen and (min-width: 1669px) {
    width: 36%;
    top: 32%;
  }

  @media only screen and (max-width: 768px) {
    width: 75%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-65%, 65%);
  }
`;

export class HeroImg extends Component<ImgHeroProps> {
  render(): ReactNode {
    const { urlImg } = this.props;
    return <StyledHeroImg src={urlImg} alt="ImageHero" />;
  }
}

interface ImgLineProps {
  urlImg: string;
}

const StyledLineImg = styled.img`
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 225px;
    left: 310px;
    width: 32%;
  }
  @media only screen and (max-width: 375px) {
    positiono: absolute;
    top: 220.5px;
    left: 165px;
    width: 50%;
  }
`;
export class LineImg extends Component<ImgLineProps> {
  render(): ReactNode {
    const { urlImg } = this.props;
    return <StyledLineImg src={urlImg} alt="LineImg" />;
  }
}
