import { useState } from 'react';
import { Modals } from '../../Common/enums';
import { BackgroundStyles, BodyStyles } from './styles';
import PixelButton from '../../Common/Buttons/PixelButton';

const Modal = ({children}: any) => {
  const [shouldShow, setShouldShow] = useState(false);
  return <>
    <PixelButton onClick={() => setShouldShow(true)}>{shouldShow ? Modals.Hide : Modals.Show}</PixelButton>
    {shouldShow && < BackgroundStyles onClick={() => setShouldShow(false)}>
      <BodyStyles onClick={(e) => e.stopPropagation()}>
        <PixelButton onClick={() => setShouldShow(false)}>{Modals.Hide}</PixelButton>
        {children}
      </BodyStyles>
    </BackgroundStyles>}
  </>;
};
export default Modal;
