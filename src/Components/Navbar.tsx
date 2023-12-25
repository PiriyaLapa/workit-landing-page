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

// const Logo = styled.img.attrs((props) => ({src: props.logoIcon}))`
//   width: 5.985em;
//   height: 1.538em;
//   display: inline-block;
//   padding: 1.538em;
// `;
interface LogoProps {
  logoIcon: string;
}
class Logo extends Component<LogoProps> {
  render(): ReactNode {
    return (
      <img
        src={LogoIcon}
        alt="logo"
        style={{
          width: "5.985em",
          height: "1.538em",
          display: "inline-block",
          padding: "1.538em",
        }}
      />
    );
  }
}

export default class Navbar extends Component {
  render(): ReactNode {
    return (
      <StyledNavbar theme={theme}>
        {/* <Logo logoIcon={LogoIcon}/> */}
        <Logo logoIcon={LogoIcon} />
        <button type="submit">buton</button>
      </StyledNavbar>
    );
  }
}
