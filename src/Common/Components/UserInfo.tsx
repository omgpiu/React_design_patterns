import { IUser } from '../API/data';
import { CardStyles } from './styles';


interface IProps {
  user: IUser;
}

const UserInfo = ({user}: IProps) => {
  const {name, age, hobbies, hairColor} = user;
  return <CardStyles>
    <div className='front main_front'>
      <div className='content'>
        <p>Age: {age} years</p>
        <p>Hair color: {hairColor} </p>
        <p>Hobbies:</p>
        <ul>
          {hobbies && hobbies.map((hobby: string) => <li key={hobby}>{hobby}</li>)}
        </ul>
      </div>
      <div className='front second_front'>
        <h2>{name}</h2>
      </div>
    </div>


  </CardStyles>;
};
export default UserInfo;
