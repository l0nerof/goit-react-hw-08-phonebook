import { Navigate } from 'react-router-dom';
import { useAuth } from '../../redux/auth/useAuth';

export const LimitedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
