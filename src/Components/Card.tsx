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

  @media only screen and (max-width: 768px) {
    display: inline-block;
    margin: 3% 20px;
  }
`;

const TitleCard = styled.h1<{ shape: typeof shape; fonts: typeof fonts }>`
  margin: 30px 0;
  @media only screen and (max-width: 768px) {
    display: inline-block;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    display: inline-block;
    text-align: left;
    padding: 10px;
  }
`;

const ContentCard = styled.p<{ fonts: typeof fonts }>`
  font-family: ${(props) => props.fonts.SecondaryFont};
  margin: 20px 13px;
  @media only screen and (max-width: 768px) {
    text-align: left;
  }
`;

const CardWrap = styled.div<{ theme: typeof theme }>`
  color: ${(props) => props.theme.darkPurpleColor};
`;

interface CardProps {
  Data: CARDData[];
}
const CardInner = styled.div`
  height: auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
    float: right;

    * {
      margin: 3% 0;
    }
  }
`;

const InnerContent = styled.div`
  @media only screen and (max-width: 768px) {
    width: 60%;
    display: inline-block;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }
`;

const InnerHeader = styled.div`
  @media only screen and (max-width: 768px) {
    display:inline-block;
    position:relative;
    top:50%;
    left:50%;
    transform:translate(-550%,-120%);
  }
`;

export default class Card extends Component<CardProps> {
  render(): ReactNode {
    const { Data } = this.props;
    return (
      <CardContainer>
        {Data.map((data, index) => (
          <CardWrap key={index} theme={theme}>
            <CardInner>
              <InnerHeader>
                <CircleShape shape={shape} fonts={fonts}>
                  <h2>{data.id}</h2>
                </CircleShape>
              </InnerHeader>
              <InnerContent>
                <TitleCard shape={shape} fonts={fonts}>
                  {data.title}
                </TitleCard>
                <ContentCard fonts={fonts}>{data.content}</ContentCard>
              </InnerContent>
            </CardInner>
          </CardWrap>
        ))}
      </CardContainer>
    );
  }
}
