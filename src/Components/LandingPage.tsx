import { Component, ReactNode } from "react";
import { ContainerLandingPage } from "../Components/styledComponent";
import Header from "./Header";
import { theme } from "../utility";

export default class LandingPage extends Component {
  render(): ReactNode {
    return (
      <ContainerLandingPage theme={theme} $inputColor={theme.primaryColor} $fontColor={theme.secondaryColor}>
          <p>test</p>
        <Header />
        {/* <Center />kk
        <Botton />
        <h1>Landing Page</h1> */}
      </ContainerLandingPage>
    );
  }
}
