import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../utility";

const HeaderContainer = styled.div<{ theme: typeof theme }>`
  width: 100%;
  height: 730px;
  background-color: ${(props) => props.theme.darkPurpleColor};
  color: ${(props) => props.theme.WhiteColor};
`;

export default class Header extends Component {
  render(): ReactNode {
    return (
      <HeaderContainer theme={theme}>
        <h1>HeaderContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quae
          eius harum consectetur alias. Ullam impedit iusto quidem nemo
          deserunt.
        </p>
      </HeaderContainer>
    );
  }
}
