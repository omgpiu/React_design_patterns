import React from 'react';
import { LeftDivStyles, RightDivStyles } from './styles';

interface IProps {
  side: string;
}

export const LeftSideComponent = ({side}: IProps) =>
  <LeftDivStyles>{side}</LeftDivStyles>;

export const RightSideComponent = ({side}: IProps) =>
  <RightDivStyles>{side}</RightDivStyles>;
