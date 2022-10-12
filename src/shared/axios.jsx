import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// interceptor 통해 로그인/회원가입을 제외한 모든 API 요청에 JWT 헤더에 포함시킴
api.interceptors.request.use(function (config) {
  if (config.url !== "/auth/signup" && config.url !== "/auth/signin") {
    const auth = localStorage.getItem("AccessToken");
    config.headers.Authorization = `Bearer ${auth}`;
    return config;
  }
  return config;
});

// interceptor 통해 로그인/회원가입을 제외한 모든 API 요청에 JWT 헤더에 포함시킴
// api.interceptors.response.use(function (config) {
//   // TODO 전역 에러 처리
// });

// 전역 axios 사용
export const apis = {
  // auth page(/)
  sign_up: ({ email, password }) =>
    api.post(`/auth/signup`, { email, password }),
  sign_in: ({ email, password }) =>
    api.post(`/auth/signin`, { email, password }),

  // todoList page(/todo)
  create_todo: ({ todo }) => api.post(`/todos`, { todo }),
  get_todos: () => api.get(`/todos`),
  update_todo: ({ id, todo, isCompleted }) =>
    api.put(`/todos/${id}`, { todo, isCompleted }),
  delete_todo: ({ id }) => api.delete(`/todos/${id}`),
};
