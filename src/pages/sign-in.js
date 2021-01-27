import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';
import { ROUTES } from '../constants/routes';
import { signInErrorMessagesKO } from '../constants/error-messages';

export default function SignIn() {
  const history = useHistory();
  const firebase = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = event => {
    event.preventDefault();

    // Language code to Korean
    firebase.auth().languageCode = 'ko';

    // firebase auth sign-in
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        // push to the browse page
        history.push(ROUTES.BROWSE);
      })
      .catch(error => {
        setEmailAddress('');
        setPassword('');
        setError(signInErrorMessagesKO[error.code] || error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>로그인</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="이메일 주소"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="비밀번호"
              autocomplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit type="submit">로그인</Form.Submit>
          </Form.Base>
          <Form.Text>
            Netflix 회원이 아닌가요?{' '}
            <Form.AuthFormLink to={ROUTES.SIGN_UP}>
              지금 가입하세요.
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
