import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';
// import { Container } from './styles';

function SignIn() {
  return (
    <>
      <img src={logo} alt="Gobarber" />

      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Seu senha secreta" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}

export default SignIn;
