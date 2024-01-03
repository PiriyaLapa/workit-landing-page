import { Component, ReactNode } from "react";
import { CARDData } from "../Data/Data";
import styled from "styled-components";
import { shape, fonts, theme } from "../utility";

const CircleShape = styled.div<{ shape: typeof shape; fonts: typeof fonts }>`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.darkPurpleColor};
  font-family: ${(props) => props.fonts.PrimaryFont};
  font-size: 1.2em;
  font-style: normal;
  font-weight: 600;
  color: ${(props) => props.theme.darkPurpleColor};
  text-align: center;
  margin: 45px auto;
`;

const TitleCard = styled.h1<{ shape: typeof shape; fonts: typeof fonts }>`
  margin: 30px 0;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentCard = styled.p<{ fonts: typeof fonts }>`
  font-family: ${(props) => props.fonts.SecondaryFont};
  margin: 20px 13px;
`;

const CardWrap = styled.div<{ theme: typeof theme }>`
  color: ${(props) => props.theme.darkPurpleColor};
  border:1px solid red;
  position:relative;
`;

interface CardProps {
  Data: CARDData[];
}

export default class Card extends Component<CardProps> {
  render(): ReactNode {
    const { Data } = this.props;
    return (
      <CardContainer>
        {Data.map((data, index) => (
          <CardWrap key={index} theme={theme}>
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
