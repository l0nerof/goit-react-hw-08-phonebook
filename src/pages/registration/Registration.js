import { useDispatch } from 'react-redux';
import { registration } from '../../redux/auth/operations';
import { useState } from 'react';
import css from './Registration.module.css';

export function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(
      registration({
        name,
        email,
        password,
      })
    );

    event.currentTarget.reset();
  };

  return (
    <div>
      <h1 className={css.Main}>Registration</h1>
      <form onSubmit={handleSubmit} className={css.formContainer}>
        <label>
          Username
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
