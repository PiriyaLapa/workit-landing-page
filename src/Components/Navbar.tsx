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

// const Logo = styled.img`
//   width: 5.985em;
//   height: 1.538em;
//   display: inline-block;
//   background-image: url(${LogoIcon});
//   background-repeat: no-repeat;
//   background-position: left;
//   padding: 1.538em;
// `;

export default class Navbar extends Component {
  render(): ReactNode {
    return (
      <StyledNavbar theme={theme}>
        {/* <Logo /> */}
        <img src="../assets/Logo.png" />
        <button type="submit">buton</button>
      </StyledNavbar>
    );
  }
}
