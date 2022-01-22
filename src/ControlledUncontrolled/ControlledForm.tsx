import { useEffect, useState } from 'react';
import PixelButton from '../Common/Buttons/PixelButton';

const ControlledForm = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [hairColor, setHairColor] = useState('');

  useEffect(() => {
    if (name !== '' && name.length < 2) {
      console.log('Name must be two or more characters');
    }
  }, [name]);

  return <form>
    <input
      name='name'
      type='text'
      placeholder='name'
      value={name}
      onChange={(e) => setName(e.target.value)} />
    <input
      name='age'
      type='number'
      placeholder='age'
      value={age}
      onChange={(e) => setAge(e.target.value)} />
    <input
      name='hairColor'
      type='text'
      placeholder='hair color'
      value={hairColor}
      onChange={(e) => setHairColor(e.target.value)} />
    <PixelButton>Submit</PixelButton>
  </form>;
};

export default ControlledForm;
