import axios from "axios";

const serverURL = process.env.REACT_APP_SERVER_URL;

const api = axios.create({
  baseURL: serverURL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json,",
  },
});

// interceptor 통해 특정 URL로 가는 API 요청 모두에 jwt 헤더에 포함시킴
api.interceptors.request.use((config) => {
  const auth = localStorage.getItem("Authorization");
  config.headers.common["Authorization"] = `Bearer ${auth}`;
  return config;
});

// 전역 axios 사용
export const apis = {
  // auth page(/)
  sign_up: ({ email, password }) =>
    axios.post(`/auth/signup`, { email, password }),
  sign_in: ({ email, password }) =>
    axios.post(`/auth/signin`, { email, password }),

  // todoList page(/todo)
  create_todo: ({ todo }) => axios.post(`/todos`, { todo }),
  get_todos: () => axios.get(`/todos`),
  update_todo: ({ id, todo, isCompleted }) =>
    axios.put(`/todos/${id}`, { todo, isCompleted }),
  delete_todo: ({ id }) => axios.dekete(`/todos/${id}`),
};
