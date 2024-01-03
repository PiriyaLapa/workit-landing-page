import { Component, ReactNode } from "react";
import { CARDData } from "../Data/Data";
import styled from "styled-components";
import { shape, fonts } from "../utility";

const CircleShape = styled.div<{ shape: typeof shape; fonts: typeof fonts }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.darkPurpleColor};
  font-family: ${(props) => props.fonts.PrimaryFont};
  font-size: 1.2em;
  font-style: normal;
  font-weight:600;
  color: ${(props) => props.theme.darkPurpleColor};
  text-align: center;
  margin: 5px auto;
`;

const TitleCard = styled.h1<{ shape: typeof shape; fonts: typeof fonts }>`
  margin: 30px 0;
`;

const CardContainer = styled.div`
  display: flex;
`;

const ContentCard = styled.p<{fonts:typeof fonts}>`
  color:green;
  font-family: ${(props) => props.fonts.SecondaryFont};
  margin: 0 20px;
  border: 1px solid green;
`;
const CardWrap = styled.div`
  border:1px solid green; 
  margin-right: 30px;
`

interface CardProps {
  Data: CARDData[];
}

export default class Card extends Component<CardProps> {
  render(): ReactNode {
    const { Data } = this.props;
    return (
      <CardContainer>
        {Data.map((data, index) => (
          <CardWrap key={index}>
            <CircleShape shape={shape} fonts={fonts}>
              <h2>{data.id}</h2>
            </CircleShape>
            <TitleCard shape={shape} fonts={fonts}>
              {data.title}
            </TitleCard>
            <ContentCard fonts={fonts}>{data.content}</ContentCard>
          </CardWrap>
        ))}
      </CardContainer>
    );
  }
}
