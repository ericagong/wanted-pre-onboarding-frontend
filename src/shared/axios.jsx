import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// interceptor 통해 특정 URL로 가는 API 요청 모두에 jwt 헤더에 포함시킴
api.interceptors.request.use(function (config) {
  if (config.url !== "/auth/signup" && config.url !== "/auth/signin") {
    const auth = localStorage.getItem("Authorization");
    config.headers.common["Authorization"] = `Bearer ${auth}`;
    return config;
  }
  return config;
});

// 전역 axios 사용
export const apis = {
  // auth page(/)
  sign_up: ({ email, password }) =>
    api.post(`/auth/signup`, { email, password }),
  sign_in: ({ email, password }) =>
    api.post(`/auth/signin`, { email, password }),

  // todoList page(/todo)
  create_todo: ({ todo }) => api.post(`/todos`, { todo }),
  get_todos: () => apis.get(`/todos`),
  update_todo: ({ id, todo, isCompleted }) =>
    api.put(`/todos/${id}`, { todo, isCompleted }),
  delete_todo: ({ id }) => api.delete(`/todos/${id}`),
};
