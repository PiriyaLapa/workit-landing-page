import { Component, ReactNode } from "react";
import { ContainerLandingPage } from "../Components/styledComponent";
import Header from "./Header";
import MiddleSection from './MiddleSection';


export default class LandingPage extends Component {
  render(): ReactNode {
    return (
        <ContainerLandingPage>
          <Header />
      </ContainerLandingPage>
    );
  }
}
