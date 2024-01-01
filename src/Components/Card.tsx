import { Component, ReactNode } from "react";
import { CARDData } from "../Data/Data";
import styled from "styled-components";
import { shape } from "../utility";

const CircleShape = styled.div<{ shape: typeof shape }>`
  width: 36px;
  height: 36px;
  border-radius:50%;
  border:1px solid red;
`;

interface CardProps {
  Data: CARDData[];
}

export default class Card extends Component<CardProps> {
  render(): ReactNode {
    const { Data } = this.props;
    return (
      <div>
        {Data.map((data, index) => (
          <div key={index}>
            <CircleShape shape={shape}><h2>{data.id}</h2></CircleShape>
            <h2>{data.title}</h2>
            <p>{data.content}</p>
          </div>
        ))}
      </div>
    );
  }
}
