import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={css.Navigation}>
      <NavLink to="/" className={css.Home}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={css.Contacts}>
        Contacts
      </NavLink>
    </nav>
  );
}
