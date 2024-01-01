import { Component, ReactNode } from "react";
import { CARDData } from "../Data/Data";

interface CardProps {
  Data: CARDData[];
}

export default class Card extends Component<CardProps> {
  constructor(props:CardProps){
    super(props);
  }

  render(): ReactNode {
    const { Data } = this.props;
    return (
      <div>
        {Data.map((data, index) => (
          <div key={index}>
          <h1>{data.id}</h1>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          </div>
        ))}
      </div>
    );
  }
}
