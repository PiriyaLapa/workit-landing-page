import { Component, ReactNode } from 'react';
import styled from 'styled-components';
import {theme} from '../utility';

const StylePrimaryBtn = styled.button<{theme: typeof theme}>`
    // default primary button
    // width:11.875em;
    height:3.813em;
    width:15%;
    background-color:${(props) => props.theme.EncaplyptusColor};
    text-transform:capitalize;
    font-size:18px;
    font-weight:700;

    &:hover {
        background-color:${(props) => props.theme.darkPurpleColor};
        color:${(props) => props.theme.EncaplyptusColor};
        border:1px solid ${(props) => props.theme.EncaplyptusColor};
        transition:0.4s;
    }
`;

const StyleSecondary = styled(StylePrimaryBtn)`
    background-color:${(props) => props.theme.darkPurpleColor};
    color:${(props) => props.theme.WhiteColor};
    border-bottom: 1px solid ${(props) => props.theme.EncaplyptusColor};
    &:hover {
        border:none;
        color:${(props) => props.theme.EncaplyptusColor};
        transition:0.4s;
    }
`;

export class PrimaryBtn extends Component{
    render():ReactNode{
        return(
            <StylePrimaryBtn theme={theme}>apple for access</StylePrimaryBtn>
        )
    }
}

export class SecondaryBtn extends Component{
    render():ReactNode{
        return(
            <StyleSecondary theme={theme}>apple for access</StyleSecondary>
        )
    }
}



