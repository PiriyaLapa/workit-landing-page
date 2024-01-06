import { Component, ReactNode } from "react";
import { ContainerLandingPage } from "../Components/styledComponent";
import Header from "./Header";
import MiddleSection from "./MiddleSection";
import { LastedSection } from "./LastedSection";

export default class LandingPage extends Component {
  render(): ReactNode {
    return (
      <ContainerLandingPage>
        <Header />
        <MiddleSection />
        <LastedSection />
      </ContainerLandingPage>
    );
  }
}
