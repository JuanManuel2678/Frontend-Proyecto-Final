import axios from "axios";

export const authAPI = axios.create({ baseURL: "http://localhost:3000" });

export const loginUser = async ({ email, password }) => {
  const usuario = await authAPI.post("/api/auth/login", {
    email,
    password,
  });
  return usuario;
};

export const createUser = async (data) => {
  const newUse = await authAPI.post('/api/users', data)
  return newUse
}

export const getMe = async () => {
  const token = localStorage.getItem("token");
  const info = await authAPI.get("/api/auth/me", {
    headers: { Authorization: token },
  });
  return info.data;
};
