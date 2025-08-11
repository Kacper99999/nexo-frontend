import { useSelector } from 'react-redux';
import { selectUser } from '../redux/selectors/auth.selectors';

export default function HomePage() {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div>
      <h1>{`Welcome ${user.user.userName}`}</h1>
      <p>{`${user.isLoggedIn}`}</p>
    </div>
  );
}
