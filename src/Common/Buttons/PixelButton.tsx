import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const animate = keyframes`
  0% {
    background-position-y: 0;
  }
  100% {
    background-position-y: -480px;
  }
`;
export const PixelButtonStyles = styled.button`

  position: relative;
  width: 180px;
  height: 60px;
  margin: 20px;
  line-height: 60px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  trasnition: 0.5s;
  border: 1px solid #7a18ec;
  background-color: #111;

  &:hover {
    background: #7a18ec url(https://i.postimg.cc/FzBWFtKM/pixel2.png); // 360px x 1080px
    transition-delay: 0.8s;
    background-size: 180px;
    animation: ${animate} 0.8s steps(8) forwards;
    
  }


`;


const PixelButton = ({children, ...rest}: any) => {
  return <PixelButtonStyles {...rest}>
    {children}
  </PixelButtonStyles>;
};
export default PixelButton;
