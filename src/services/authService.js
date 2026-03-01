import api from "./api";

// Đăng nhập
export const login = (data) => {
  return api.post("/auth/login", data);
};

// Lấy thông tin user hiện tại
export const getProfile = () => {
  return api.get("/auth/profile");
};