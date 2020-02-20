import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';
// import { Container } from './styles';

function SignUp() {
  return (
    <>
      <img src={logo} alt="Gobarber" />

      <form>
        <input placeholder="Nome completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Seu senha secreta" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}

export default SignUp;
