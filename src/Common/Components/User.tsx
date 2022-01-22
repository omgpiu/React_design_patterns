import { IUser } from '../API/data';
import Spinner from '../Spiner/Spinner';
import { CardStyles } from './styles';


interface IProps {
  user?: IUser;
}

const User = ({user}: IProps) => {
  //добавить мемо
  const {name, age, hobbies, hairColor} = user || {};
  return (<CardStyles>
      <div className='front main_front'>
        {user ? <div className='content'>
          <p>Age: {age} years</p>
          <p>Hair color: {hairColor} </p>
          <p>Hobbies:</p>
          <ul>
            {hobbies && hobbies.map((hobby: string) => <li key={hobby}>{hobby}</li>)}
          </ul>
        </div> : <Spinner />}
        <div className='front second_front'>
          <h2>{name}</h2>
        </div>
      </div>
    </CardStyles>
  );
};
export default User;
