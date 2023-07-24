import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Registration } from '../pages/registration/Registration';
import { Login } from '../pages/login/Login';
import { Contacts } from '../pages/contacts/Contacts';
import { Home } from '../pages/home/Home';
import { PrivateRoute } from './privateRoute/PrivateRoute';
import { LimitedRoute } from './limitedRoute/LimitedRoute';
import { useAuth } from '../redux/auth/useAuth';
import { refreshUser } from '../redux/auth/operations';
import { Layout } from './layout/Layout';

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Loading ...</div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <LimitedRoute redirectTo="/contacts" component={<Registration />} />
          }
        />
        <Route
          path="/login"
          element={
            <LimitedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
