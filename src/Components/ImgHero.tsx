import {Component, ReactNode} from 'react';
import styled from 'styled-components';

interface ImgHeroProps{
    urlImg:string;
}

const StyledHeroImg = styled.img`
    width:100%;
    height:auto;
`;

export class HeroImg extends Component<ImgHeroProps>{
    render():ReactNode{
        return(
            <StyledHeroImg src={this.props.urlImg} alt="ImageHero" />
        )
    }
}