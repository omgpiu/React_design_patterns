import styled from '@emotion/styled';

export const CardStyles = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  margin: 25px;

  //margin: 0 auto;
  background: #000;
  border-radius: 15px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);

  ul li&:before {
    color: #00fffc
  }

  .front {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &.main_front {
      box-sizing: border-box;
      padding: 20px;

      h2 {
        margin: 0;
        padding: 0;
      }

      p, ul, h3 {
        background-color: #00fffc;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bold;
      }
    }

    &.second_front {
      transition: 0.5s;

      h2 {
        text-align: center;
        margin: 0;
        padding: 0;
        font-size: 3em;
        color: #fff;
        transition: 0.5s;
        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        z-index: 10;
      }
    }
  }

  &:hover .front.second_front {
    height: 60px;

    h2 {
      font-size: 2em;
    }
  }

  &:nth-of-type(n) .front.second_front {
    background-image: linear-gradient(40deg,
    #fffc00 0%,
    #fc00ff 45%,
    #00fffc 100%);
    border-radius: 15px;
  }
`;
