import { Component, ReactNode } from 'react';
import styled from 'styled-components';

const StylePrimaryBtn = styled.button`
    // width:11.875em;
    height:3.813em;
    width:15%;
`;

export class PrimaryBtn extends Component{
    render():ReactNode{
        return(
            <StylePrimaryBtn>apple for access</StylePrimaryBtn>
        )
    }
}



