import { Component, ReactNode } from "react";
import styled from "styled-components";

interface ImgHeroProps {
  urlImg: string;
}

const StyledHeroImg = styled.img`
  width: 39%;
  height: auto;
  display: block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-135%, 30%);

  @media only screen and (min-width: 1669px) {
    width: 36%;
    top: 32%;
  }
  @media only screen and (max-width: 768px){
    position:relative;
    top:50%;
    left:95%;
    transform:transfer(-170%,90%);
    width:70%;

  }
`;

export class HeroImg extends Component<ImgHeroProps> {
  render(): ReactNode {
    const { urlImg } = this.props;
    return <StyledHeroImg src={urlImg} alt="ImageHero" />;
  }
}
