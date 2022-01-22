import { useRef } from 'react';
import PixelButton from '../Common/Buttons/PixelButton';

const UncontrolledForm = () => {
  const nameInput = useRef(null);
  const ageInput = useRef(null);
  const hairColorInput = useRef(null);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // @ts-ignore
    console.log(nameInput.current.value, 'nameInput');
    // @ts-ignore
    console.log(ageInput.current.value, 'ageInput');
    // @ts-ignore
    console.log(hairColorInput.current.value, 'hairColorInput');
    console.log('e.target', e.target.name.value);
  };
  return <form onSubmit={handleSubmit}>
    <input name='name' type='text' placeholder='name' ref={nameInput} />
    <input name='age' type='number' placeholder='age' ref={ageInput} />
    <input name='hairColor' type='text' placeholder='hair color' ref={hairColorInput} />
    <PixelButton type='submit'>Submit</PixelButton>
  </form>;
};

export default UncontrolledForm;
