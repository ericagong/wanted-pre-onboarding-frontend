# 원티드 프리온보딩 프론트엔드 - 선발 과제

안녕하세요. FE 개발자 Erica Gong입니다.
해당 레포지토리는 원티스 프리온보딩 선발 과제로 로그인/회원가입 기능이 있는 간략한 Todo List를 구현하였습니다.
해당 프로젝트에서는 원티드에서 제공한 [API]('https://github.com/walking-sunset/selection-task') 를 사용하였습니다.

## 프로젝트 실행 방법

```zsh
$ npm install
$ npm start
```

- 위 순서대로 실행하면 localhost:8000 포트에 서버가 실행됩니다.
- 서버를 실행하면 db.sqlite 파일이 생성되며 해당 파일을 삭제 시 기존의 데이터는 초기화 됩니다.
- 그 외 스펙은 배포된 API와 동일합니다.

## 데모 영상

동영상 첨부하기
Assignment별 기능 동작 세부 영상 첨부하기

## 배포 링크

## 프로젝트 진행 상황

[x] 1차 완료
[ ] vercel 배포
[ ] 과제 점검 사항 체크

## 과제 점검 사항

### :: 1. 로그인 / 회원가입

[x] `/` 경로에 로그인 / 회원가입 기능을 개발해주세요
[x] 페이지 안에 이메일 입력창, 비밀번호 입력창, 제출 버튼이 포함된 형태로 구성해주세요
[x] 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다.

#### Assignment1

[x] 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
[x] 이메일 조건: `@` 포함
[x] 비밀번호 조건: 8자 이상
[x] 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요
[x] 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.

#### Assignment2

[x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 `/todo` 경로로 이동해주세요
[x] 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
[x] 응답받은 JWT는 로컬 스토리지에 저장해주세요

#### Assignment3

[x] 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
[x] 로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
[x] 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/` 경로로 리다이렉트 시켜주세요

### :: 2. 투두 리스트

#### Assignment4

[x] `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
[x] 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
[x] 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요

#### Assignment5

[x] 투두 리스트의 수정, 삭제 기능을 구현해주세요
[x] 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요
[x] 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 해주세요
[x] 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세요

# API

- API 주소: https://pre-onboarding-selection-task.shop/

## 스펙

## 1) Auth

---

## 1-1) SignUp

### 요청

- URL: `/auth/signup`
- Method: `POST`
- Headers:
  - Content-Type: `application/json`
- Body:
  - email: string
  - password: string

### 응답 예시

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwic3ViIjo0LCJpYXQiOjE2NTk5MDQyMTUsImV4cCI6MTY2MDUwOTAxNX0.DyUCCsIGxIl8i_sGFCa3uQcyEDb9dChjbl40h3JWJNc"
}
```

## 1-2) SignIn

### 요청

- URL: `/auth/signin`
- Method: `POST`
- Headers:
  - Content-Type: `application/json`
- Body:
  - email: string
  - password: string

### 응답 예시

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwic3ViIjo0LCJpYXQiOjE2NTk5MDQyMTUsImV4cCI6MTY2MDUwOTAxNX0.DyUCCsIGxIl8i_sGFCa3uQcyEDb9dChjbl40h3JWJNc"
}
```

## 2) Todo

## 2-1) createTodo

### 요청

- URL: `/todos`
- Method: `POST`
- Headers:
  - Authorization: `Bearer access_token`
  - Content-Type: `application/json`
- Body:
  - todo: string

### 응답 예시

- status: 201 Created

```json
{
  "id": 1,
  "todo": "과제하기",
  "isCompleted": false
  "userId": 1,
}
```

## 2-2) getTodos

### 요청

- URL: `/todos`
- Method: `GET`
- Headers:
  - Authorization: `Bearer access_token`

### 응답 예시

- status: 200 OK

```json
[
  {
    "id": 1,
    "todo": "todo2",
    "isCompleted": false,
    "userId": 1
  },
  {
    "id": 2,
    "todo": "todo3",
    "isCompleted": false,
    "userId": 1
  }
]
```

## 2-3) updateTodo

### 요청

- URL: `/todos/:id`
- Method: `PUT`
- Headers:
  - Authorization: `Bearer access_token`
  - Content-Type: `application/json`
- Body:
  - todo: string
  - isCompleted: boolean

### 응답 예시

- status: 200 OK

```json
{
  "id": 1,
  "todo": "Hello World",
  "isCompleted": true,
  "userId": 2
}
```

## 2-4) deleteTodo

### 요청

- URL: `/todos/:id`
- Method: `DELETE`
- Headers:
  - Authorization: `Bearer access_token`

### 응답 예시

- status: 204 No Content
- body: 없음

## 로컬 서버 구동

- 배포된 API에 문제가 있는 경우 활용할 수 있는 로컬 서버 구동법입니다.
- 로컬 서버는 sqlite에 의존성이 있습니다.

### 설치 및 실행

```zsh
$ npm install
$ npm start
```

- 위 순서대로 실행하면 localhost:8000 포트에 서버가 실행됩니다.
- 서버를 실행하면 db.sqlite 파일이 생성되며 해당 파일을 삭제 시 기존의 데이터는 초기화 됩니다.
- 그 외 스펙은 배포된 API와 동일합니다.
