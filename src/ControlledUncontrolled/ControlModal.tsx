import { BackgroundStyles, BodyStyles } from '../LayoutComponents/Modal/styles';
import { ReactNode } from 'react';

interface IProps {
  shouldShow: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const ControlledModal = ({shouldShow, onClose, children}: IProps) => {
  return <>
    {shouldShow ? < BackgroundStyles onClick={onClose}>
      <BodyStyles onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>Hide Modal</button>
        {children}
      </BodyStyles>
    </BackgroundStyles> : null}
  </>;
};
export default ControlledModal;

