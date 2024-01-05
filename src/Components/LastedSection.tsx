import {Component,ReactNode} from 'react';
import styled from 'styled-components';
import { theme } from '../utility';
import ProfileImg from '../assets/Profile_picture.png'

const LastedContainer = styled.div<{theme:typeof theme}>`
    width:100%;
    height: 500px;
    background-color:${(props) => props.theme.WhiteColor};
`;
const StyleProfile = styled.img`
    width:20%;
    height:auto;
`

interface urlImgProps{
    urlImg:string;
}
class Profile extends Component<urlImgProps>{
    render():ReactNode{
        return(
            <StyleProfile src={this.props.urlImg} alt="ProfileImg" />
        )
    }
}
export default class LastedSection extends Component{
    render():ReactNode{
        return(
            <LastedContainer theme={theme}>
               <Profile urlImg={ProfileImg} /> 
            </LastedContainer>
        )
    }
}