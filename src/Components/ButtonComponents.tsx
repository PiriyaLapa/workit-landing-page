import { Component, ReactNode } from 'react';
import styled from 'styled-components';
import {theme} from '../utility';

const StylePrimaryBtn = styled.button<{theme: typeof theme}>`
    // width:11.875em;
    height:3.813em;
    width:15%;
    background-color:${(props) => props.theme.EncaplyptusColor};
    text-transform:capitalize;
    font-size:bold;

`;

export class PrimaryBtn extends Component{
    render():ReactNode{
        return(
            <StylePrimaryBtn theme={theme}>apple for access</StylePrimaryBtn>
        )
    }
}



