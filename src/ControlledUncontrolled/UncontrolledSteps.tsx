import { Children, cloneElement, isValidElement, useState } from 'react';
import PixelButton from '../Common/Buttons/PixelButton';

const UncontrolledSteps = ({children, onFinish}: any) => {
  const [data, setData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNext = (stepData: any) => {
    const nextIndex = currentIndex + 1;
    const updatedData = {
      ...data,
      ...stepData
    };
    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }
    setData(updatedData);
  };

  const currentChildren = Children.toArray(children)[currentIndex];
  if (isValidElement(currentChildren)) {
    return cloneElement(currentChildren, {goToNext});
  }

  return <>
    {currentChildren}
    <PixelButton onClick={() => setCurrentIndex(currentIndex + 1)}>Next</PixelButton>
  </>;
};
export default UncontrolledSteps;
