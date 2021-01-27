import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';
import { ROUTES } from '../constants/routes';
import { signUpErrorMessagesKO } from '../constants/error-messages';

export default function SignUp() {
  const history = useHistory();
  const firebase = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = event => {
    event.preventDefault();

    // firebase auth sign-up
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then(result =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: 4,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch(error => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(signUpErrorMessagesKO[error.code] || error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>회원가입</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="이름"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="이메일 주소"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="비밀번호"
              value={password}
              autoComplete="off"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit type="submit">회원가입</Form.Submit>
          </Form.Base>
          <Form.Text>
            이미 Netflix 회원이신가요?{' '}
            <Form.AuthFormLink to={ROUTES.SIGN_IN}>
              지금 시작하세요.
            </Form.AuthFormLink>
          </Form.Text>
          <Form.TextSmall>
            이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
            확인합니다.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
