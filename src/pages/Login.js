// import React, { useContext } from 'react';
import { useState } from 'react';

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

  return (
    <section>
      <form>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            data-testid="email-input"
            name="inputEmail"
            value={ login.inputEmail }
            onChange={ handleChange }
          />
        </label>
        <br />
        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            data-testid="password-input"
            name="inputPassword"
            value={ login.inputPassword }
            onChange={ handleChange }
          />
        </label>
        <br />
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ isDisabled }
          // onClick={}
        >
          Enter

        </button>
      </form>
    </section>
  );
}

export default Login;
