import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';
import { ROUTES } from '../constants/routes';

export default function SignIn() {
  const history = useHistory();
  const firebase = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Quick valdiation about email address and password on the client side
  const isInvalid = password === '' || emailAddress === '';

  const handleSignIn = e => {
    e.preventDefault();

    // Language code to Korean
    firebase.auth().languageCode = 'ko';

    // Custom Korean error messages
    const firebaseSignInErrorsKO = {
      'auth/invalid-email':
        '입력하신 이메일 주소 형식이 올바르지 않습니다. 다시 입력해주세요.',
      'auth/user-disabled':
        '죄송합니다. 이 이메일 주소를 사용하는 계정이 비활성화 상태입니다. 다시 시도해주세요.',
      'auth/user-not-found':
        '죄송합니다. 이 이메일 주소를 사용하는 계정을 찾을 수 없습니다. 다시 시도하시거나 새로운 계정을 등록하세요.',
      'auth/user-wrong-password':
        '비밀번호를 잘못입력하셧습니다. 다시 입력하시거나 비밀번호를 재설정하세요.',
    };

    // firebase auth
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
        setError(firebaseSignInErrorsKO[error.code] || error.message);
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
              placeholder="이메일 주소 또는 전화번호"
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
            <Form.Submit disabled={isInvalid} type="submit">
              로그인
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Netflix 회원이 아닌가요?{' '}
            <Form.SignUpLink to={ROUTES.SIGN_UP}>
              지금 가입하세요.
            </Form.SignUpLink>
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
