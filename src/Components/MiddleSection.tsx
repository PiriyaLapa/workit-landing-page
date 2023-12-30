import  { Component,ReactNode } from "react";
// import styled from 'styled-components';


export default class MiddleSection extends Component {
  render():ReactNode {
    return (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="960"
          viewBox="0 0 1440 960"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0H1440V892C1440 892 1082.96 960 722 960C361.039 960 0 892 0 892V0Z"
            fill="#FCF8FF"
          />
        </svg>
      </div>
    );
  }
}
