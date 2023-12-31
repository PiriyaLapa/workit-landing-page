import { Component, ReactNode } from "react";
import styled from "styled-components";
import { DATAItem } from "../utility";


interface CardProps{
    items:DATAItem[]
}

const CardWrapper = styled.div`
  border: 1px solid green;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default class Card extends Component<CardProps> {
  constructor(props: CardProps){
    super(props);
  }
  render(): ReactNode {
    const {items} = this.props
    return (
      <CardWrapper>
        {items.map((item,index) => (
            <h1>{item.id}</h1>
        ))}
      </CardWrapper>
    );
  }
}
