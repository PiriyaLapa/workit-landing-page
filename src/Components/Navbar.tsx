import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../utility";
import LogoIcon from "../assets/Logo.png";

const StyledNavbar = styled.nav<{ theme: typeof theme }>`
  width: 90%;
  background-color: none;
  border: 1px solid ${(props) => props.theme.EncaplyptusColor};
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding: 10px;
`;

const StyledImgLogo = styled.img`
  width:100%;
`
interface ImgProps{
  imgUrl:string;
}

export class ImageLogo extends Component<ImgProps>{
  render():ReactNode{
    return(
      <StyledImgLogo src={this.props.imgUrl} />
    )
  }
}

export default class Navbar extends Component {
  render(): ReactNode {
    return (
      <StyledNavbar theme={theme}>
        <ImageLogo imgUrl={LogoIcon} />
        <button type="submit">buton</button>
      </StyledNavbar>
    );
  }
}
