import { Component, ReactNode } from 'react';
import styled from 'styled-components';

const StylePrimaryBtn = styled.button`
    width:190px;
    height:61px;
`;

export class PrimaryBtn extends Component{
    render():ReactNode{
        return(
            <StylePrimaryBtn>apple for access</StylePrimaryBtn>
        )
    }
}



