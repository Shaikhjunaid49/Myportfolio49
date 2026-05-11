import API from "./axios";

export const loginAdmin = (data) => {
  return API.post("/auth/login", data);
};

export const registerAdmin = (data) => {
  return API.post("/auth/register", data);
};