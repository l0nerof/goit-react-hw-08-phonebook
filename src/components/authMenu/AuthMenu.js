import { NavLink } from 'react-router-dom';
// import css from './AuthMenu.module.css';

export const AuthMenu = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
