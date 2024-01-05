import { Component, ReactNode } from "react";
import { ContainerLandingPage } from "../Components/styledComponent";
import Header from "./Header";
import MiddleSection from "./MiddleSection";
import LastedSection from './LastedSection';
// import { HeroImg } from "./ImgHero";
// import HeroImgSource from "../assets/moblie.png";

export default class LandingPage extends Component {
  render(): ReactNode {
    return (
      <ContainerLandingPage>
        <Header />
        {/* <HeroImg urlImg={HeroImgSource} /> */}
        <MiddleSection />
        <LastedSection />
      </ContainerLandingPage>
    );
  }
}
