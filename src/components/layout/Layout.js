import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Navigation } from 'components/navigation/Navigation';
import { UserMenu } from 'components/userMenu/UserMenu';
import { useAuth } from 'redux/auth/useAuth';
import { AuthMenu } from 'components/authMenu/AuthMenu';

export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <div className={css.Layout}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </div>

      <Outlet />
    </div>
  );
};
