import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logoApp from '../images/logo Recipes App.svg';
import '../css/Login.css';

function Login() {
  const [login, setLogin] = useState({ inputEmail: '', inputPassword: '' });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLogin({
      ...login,
      [name]: value,
    });

    const MIN_LENGTH = 5;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const { inputEmail, inputPassword } = login;
    if (inputPassword.length > MIN_LENGTH && inputEmail.match(regex)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const history = useHistory();

  const handleSubmit = () => {
    const { inputEmail } = login;
    localStorage.setItem('user', JSON.stringify({ email: inputEmail }));
    history.push('/meals');
  };

  return (
    <section className="login">
      <div className="background-login" />
      <div className="logo-recipes"><img src={ logoApp } alt="logo" /></div>
      <form>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            data-testid="email-input"
            name="inputEmail"
            value={ login.inputEmail }
            onChange={ handleChange }
            placeholder="Email"
            className="email-input"
          />
        </label>
        <br />
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            data-testid="password-input"
            name="inputPassword"
            value={ login.inputPassword }
            onChange={ handleChange }
            placeholder="password"
            className="pass-input"
          />
        </label>
        <br />
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ isDisabled }
          onClick={ handleSubmit }
        >
          Enter

        </button>
      </form>
    </section>
  );
}

export default Login;
