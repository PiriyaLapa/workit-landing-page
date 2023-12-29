import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../utility";
import Navbar from './Navbar';
import ImgContainer from '../assets/Rectangle.png';

const HeaderContainer = styled.div<{ theme: typeof theme, urlImg:{ImgContainer:string}}>`
  width:1440px;
  height: 730px;
  background-image : url(${(props) => props.urlImg.ImgContainer});
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center;
  color: ${(props) => props.theme.WhiteColor};
  margin:0 auto;
`;


export default class Header extends Component {
  render(): ReactNode {
    return (
      <HeaderContainer theme={theme} urlImg={{ImgContainer}}>
        <Navbar />
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
