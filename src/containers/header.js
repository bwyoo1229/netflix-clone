import React from 'react';
import { Header } from '../components';
import { ROUTES } from '../constants/routes';
import logo from '../logo.svg';

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Inner>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>로그인</Header.ButtonLink>
      </Header.Inner>
      {children}
    </Header>
  );
}
