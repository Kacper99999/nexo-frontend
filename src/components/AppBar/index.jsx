import Logo from '../Logo';
import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors/auth.selectors';
export const AppBar = () => {
  const name = useSelector(selectUser);
  return (
    <>
    <header className={css.header}>
      <Logo/>
      <p>{`Welcome ${name.user.userName}`}</p>
    </header>
    </>
  );
};
