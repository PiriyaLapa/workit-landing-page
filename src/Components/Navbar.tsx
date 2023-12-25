import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../utility";

const StyledNavbar = styled.nav<{ theme: typeof theme }>`
  width:90%;
  background-color: ${(props) => props.theme.darkPurpleColor};
  border: 1px solid ${(props) => props.theme.EncaplyptusColor};
  display: flex;
  margin:0 auto;
  justify-content:space-between;
  padding: 10px;
`;

export default class Navbar extends Component {
  render(): ReactNode {
    return (
      <StyledNavbar theme={theme}>
        <h1>Logo</h1>
        <button type="submit">buton</button>
      </StyledNavbar>
    );
  }
}
