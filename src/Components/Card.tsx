import {Component, ReactNode} from 'react';
import styled from 'styled-components';

interface CardProps{
    id:number;
    title:string;
    content:string;
}
const CardWrapper = styled.div`
    border: 1px solid green;
    margin: 10px;
    padding: 10px;
    border-radius:8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export default class Card extends Component<CardProps>{
    render():ReactNode{
        const {id,title, content} = this.props;
        return(
            <CardWrapper>
                <h1>{id}</h1>
                <h1>{title}</h1>
                <p>{content}</p>
            </CardWrapper>
        )
    }
}
