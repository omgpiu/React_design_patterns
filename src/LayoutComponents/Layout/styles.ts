import styled from '@emotion/styled';
import { css } from '@emotion/react';

const common = css`
  font-weight: bold;
  height: 100vh;
  line-height: 100vh;
  text-align: center;
`;
export const Container = styled.div<{ isColumn?: boolean }>`
  display: flex;
  flex-direction: ${({isColumn}) => isColumn ? 'column' : 'row'};
`;

export const Pane = styled.div<{ weight: number }>`
  height: 100vh;
  flex: ${({weight}) => weight};
`;
export const LeftDivStyles = styled.div`
  ${common};
  background-color: lightblue;
`;
export const RightDivStyles = styled.div`
  background-color: pink;
  ${common}

`;
