import { Component, ReactNode } from "react";
import { ContainerLandingPage } from "../Components/styledComponent";
import {theme} from '../utility';
import Header from "./Header";


export default class LandingPage extends Component {
  render(): ReactNode {
    return (
      // <ContainerLandingPage theme={theme} $inputColor={theme.darkPurpleColor} $fontColor={theme.EncaplyptusColor}>
        <ContainerLandingPage>
          <Header />
        {/* <Center />kk
        <Botton />
        <h1>Landing Page</h1> */}
      </ContainerLandingPage>
    );
  }
}
