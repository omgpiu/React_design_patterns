import React, { ReactNode } from 'react';
import { Container, Pane } from './styles';

interface IProps {
  children: ReactNode[];
  firstSize: number;
  secondSize: number;
  isColumn?: boolean;
}

export const SplitScreen = ({children, secondSize, firstSize, isColumn}: IProps) => {
  const [firstChild, secondChild] = children;
  return (
    <Container isColumn={isColumn}>
      <Pane weight={firstSize}>
        {firstChild}
      </Pane>
      <Pane weight={secondSize}>
        {secondChild}
      </Pane>
    </Container>);
};
