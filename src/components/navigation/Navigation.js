import { NavLink } from 'react-router-dom';
// import css from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={css.Navigation}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
}
