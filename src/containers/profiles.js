import React from 'react';
import { Header } from '../components';
import { ROUTES } from '../constants/routes';
import logo from '../logo.svg';
import { Profiles } from '../components';

export default function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header background={false}>
        <Header.Inner>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Inner>
      </Header>
      <Profiles>
        <Profiles.Title>Netflix를 시청할 프로필을 선택하세요.</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
