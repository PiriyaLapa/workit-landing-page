import {Component, ReactNode} from 'react';
import styled from 'styled-components';

interface ImgHeroProps{
    urlImg:string;
}

const StyledHeroImg = styled.img`
    width:39%;
    height:auto;
    display:block;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,50%);
`;

export class HeroImg extends Component<ImgHeroProps>{
    render():ReactNode{
        return(
            <StyledHeroImg src={this.props.urlImg} alt="ImageHero" />
        )
    }
}