import { Children, cloneElement, isValidElement } from 'react';
import PixelButton from '../Common/Buttons/PixelButton';

const ControlledSteps = ({children, currentIndex, onNext}: any) => {

  const goToNext = (stepData: any) => {
    onNext(stepData);
  };
  const currentChildren = Children.toArray(children)[currentIndex];
  if (isValidElement(currentChildren)) {
    return cloneElement(currentChildren, {goToNext});
  }
  return <>
    {currentChildren}
    <PixelButton onClick={goToNext}>Next</PixelButton>
  </>;
};
export default ControlledSteps;
