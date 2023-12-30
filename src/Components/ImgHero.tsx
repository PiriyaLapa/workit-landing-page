import {Component, ReactNode} from 'react';
import styled from 'styled-components';

interface ImgHeroProps{
    urlImg:string;
}

const StyledHeroImg = styled.img`
    width:45%;
    height:auto;
    display:block;
    margin:0 auto;
    
`;

export class HeroImg extends Component<ImgHeroProps>{
    render():ReactNode{
        return(
            <StyledHeroImg src={this.props.urlImg} alt="ImageHero" />
        )
    }
}