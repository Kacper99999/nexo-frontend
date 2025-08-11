import Logo from '../Logo';
import css from './AppBar.module.css'
export const AppBar = () => {
  return (
    <>
    <header className={css.header}>
      <Logo/>
    </header>
    </>
  );
};
