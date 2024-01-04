import {Component, ReactNode} from 'react';
import styled from 'styled-components';

interface ImgHeroProps{
    urlImg:string;
}

const StyledHeroImg = styled.img`
    width:39%;
    height:auto;
    display:block;
    position:relative;
    top:50%;
    left:50%;
    transform:translate(-135%,30%);

    @media only screen and (min-width:1669px){
        width:36%;
        top:32%;
    } 
`;

export class HeroImg extends Component<ImgHeroProps>{
    render():ReactNode{
        return(
            <StyledHeroImg src={this.props.urlImg} alt="ImageHero" />
        )
    }
}