import {Component, ReactNode} from 'react';
import styled from 'styled-components';
const StyledNavbar = styled.nav`
    background-color:green;
`; 

export default class Navbar extends Component{
    render():ReactNode{
        return(
            <StyledNavbar>
                <h1>Logo</h1>
                <button type="submit">buton</button>
            </StyledNavbar>            
        )
    }
}
