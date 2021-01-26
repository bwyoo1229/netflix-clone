import React from 'react';
import HeaderContainer from '../containers/header';
import JumbotronContainer from '../containers/jumbotron';
import FaqsContainer from '../containers/faqs';
import FooterContainer from '../containers/footer';
import { OptForm, Feature, Disclaimer } from '../components';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>영화, TV 프로그램을 무제한으로.</Feature.Title>
          <Feature.Subtitle>
            다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
          </Feature.Subtitle>
        </Feature>
        <OptForm>
          <OptForm.Text>
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
            주소를 입력하세요.
          </OptForm.Text>
          <OptForm.Break />
          <OptForm.Input placeholder="이메일 주소" />
          <OptForm.Button>30일 무료 이용</OptForm.Button>
          <OptForm.Break />
          <Disclaimer>
            신규 회원만 이 프로모션을 이용하실 수 있습니다.
          </Disclaimer>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
