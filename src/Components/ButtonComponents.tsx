import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../utility";

const StylePrimaryBtn = styled.button<{ theme: typeof theme }>`
  height: 3.813em;
  width: 15%;
  background-color: ${(props) => props.theme.EncaplyptusColor};
  font-size: 19px;
  font-weight: 800;

  &:hover {
    background-color: ${(props) => props.theme.darkPurpleColor};
    color: ${(props) => props.theme.EncaplyptusColor};
    border: 1px solid ${(props) => props.theme.EncaplyptusColor};
    transition: 0.5s;
  }
`;

const StyleSecondary = styled(StylePrimaryBtn)`
    background-color:${(props) => props.theme.darkPurpleColor};
    color:${(props) => props.theme.WhiteColor};
    border:none;
    border-bottom: 3px solid ${(props) => props.theme.EncaplyptusColor};
    width:auto;
    height:43px;
    margin-right:10px;
    font-size:18px;
    font-weight:400;
    &:hover {
        border:none;
        color:${(props) => props.theme.EncaplyptusColor};
        border-bottom: 3px solid ${(props) => props.theme.EncaplyptusColor}
    }
`;

export class PrimaryBtn extends Component {
  render(): ReactNode {
    return <StylePrimaryBtn theme={theme}>Learn more</StylePrimaryBtn>;
  }
}

export class SecondaryBtn extends Component {
  render(): ReactNode {
    return <StyleSecondary theme={theme}>Apply for access</StyleSecondary>;
  }
}
