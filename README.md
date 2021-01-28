# 넷플릭스 코리아 웹사이트 클론

**개발 기간**: 2021년 1월 23일 ~ 진행중

```
아직 완성되지 않은 개발 진행중인 프로젝트입니다.
문서도 계속해서 수정될 예정입니다.

진행 현황에 대해선 아래 '구현할 기능'의 현황을 참고해주세요 :)
```

## 스택

|  **프론트엔드**   |  **백엔드**   |  **데이터베이스**  |
| :---------------: | :-----------: | :----------------: |
|       React       | Firebase auth | Firebase firestore |
| Styled-components |

## 이번 프로젝트를 개발하며 배우고자 하는 점

- 반응형 웹사이트에 대한 더 높은 이해도 (CSS에 대한 더 높은 이해도)
- 컴파운드 컴포넌트 패턴을 이용해서 컴포넌트를 구성할 것
- 깃 커밋 진행 사항과 메시지를 보기 쉽고 깔끔하게 유지하기
- 커스텀 훅을 작성하는 것에 더욱 능숙해지기
- 파이어베이스를 이용하는 방법 배우기
- 리액트 테스트 라이브러리 이용해서 테스트하는 법 배우기

## 구현할 기능

### 공통사항

- [x] 반응형으로 웹사이트 구현하기
- [x] 현재 넷플릭스 코리아 공식 홈페이지와 최대한 비슷하게 구현하기
- [x] 상수는 하드코딩하지 않고 변수로 지정해서 사용하기
- [x] 로그인되어 있을 시 랜딩 페이지로 이동하지 않고 메인 페이지로 이동

### 랜딩 페이지 (홈)

- [x] 헤더 컴포넌트 만들기
- [x] 점보트론 컴포넌트 만들기
- [x] 점보트론에 사진 및 비디오 클립 띄우기
- [x] FAQ 아코디언 컴포넌트 만들기
- [x] 옵트인 폼 컴포넌트 만들기
- [x] 푸터 컴포넌트 만들기

### 로그인 페이지

- [x] 헤더 컴포넌트 재사용하기
- [x] ~~로그인 폼 컴포넌트 만들기~~ --> 폼 컴포넌트 만들기
- [x] 푸터 컴포넌드 재사용하기
- [x] 로그인 안되어 있을 때 메인 페이지로 접근 시 로그인 페이지로 이동
- [x] firebase auth 이용해서 로그인 기능 만들기

### 회원가입 페이지

- [x] 헤더 컴포넌트 재사용하기
- [x] ~~회원가입 폼 컴포넌트 만들기~~ --> 폼 컴포넌트 재사용하기
- [x] firebase auth 이용해서 회원가입 기능 만들기

### 메인 페이지

- [ ] 회원가입된 유저에 한해서 메인 페이지로 리다이렉트 하기
- [ ] firebase firestore 이용해서 데이터 저장하기
- [ ] 데이터베이스에 저장된 영화 정보 불러와서 유저에게 보여주기
- [ ] 저장된 동영상 클릭시 동영상 재생하기

## 테스트 하기
