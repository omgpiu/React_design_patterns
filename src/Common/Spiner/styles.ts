import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const anima = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  z-index: 1;
  position: relative;
  width: 50px;
  height: 50px;
  border: 4px solid #240229;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.1),
  10px 10px 10px rgba(0, 0, 0, 0.4),
    inset -5px -5px 5px rgba(255, 255, 255, 0.2),
  inset 10px 10px 10px rgba(0, 0, 0, 0.4);


  &:before {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    z-index: 10;
    background: #282828;
    border-radius: 50%;
    border: 2px solid #240229;
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 0.2),
    inset 3px 3px 5px rgba(0, 0, 0, 0.5);
  }

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-image: linear-gradient(-225deg,
    #ff7402 0%,
    #ffe700 50%,
    #fff55e 100%);

    filter: blur(5px);
    z-index: -1;
    animation: ${anima} 0.5s linear infinite;
  }
`;
