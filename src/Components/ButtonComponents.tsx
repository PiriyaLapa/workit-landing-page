import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../utility";

const StylePrimaryBtn = styled.button<{
  theme: typeof theme;
  fontWeight?: number;
}>`
  height: 3.813em;
  width: 15%;
  background-color: ${(props) => props.theme.EncaplyptusColor};
  font-size: 19px;
  font-weight: ${(props) => props.fontWeight || 800};

  &:hover {
    background-color: ${(props) => props.theme.darkPurpleColor};
    color: ${(props) => props.theme.EncaplyptusColor};
    border: 1px solid ${(props) => props.theme.EncaplyptusColor};
    transition: 0.5s;
  }
  @media only screen and (max-width:768px){
    width:25%; 
  }
`;

const StyleSecondary = styled(StylePrimaryBtn)`
  background-color: ${(props) => props.theme.darkPurpleColor};
  color: ${(props) => props.theme.WhiteColor};
  border: none;
  border-bottom: 3px solid ${(props) => props.theme.EncaplyptusColor};
  width: auto;
  height: 43px;
  margin-right: 10px;
  font-size: 18px;
  font-weight: 400;
  &:hover {
    border: none;
    color: ${(props) => props.theme.EncaplyptusColor};
    border-bottom: 3px solid ${(props) => props.theme.EncaplyptusColor};
  }
`;

interface MessageProps {
  message: string;
}

export class PrimaryBtn extends Component<
  MessageProps & { fontWeight?: number }
> {
  render(): ReactNode {
    const { message, fontWeight } = this.props;
    return (
      <StylePrimaryBtn theme={theme} fontWeight={fontWeight}>
        {message}
      </StylePrimaryBtn>
    );
  }
}

export class SecondaryBtn extends Component<MessageProps> {
  render(): ReactNode {
    const { message } = this.props;
    return <StyleSecondary theme={theme}>{message}</StyleSecondary>;
  }
}
