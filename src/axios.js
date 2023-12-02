import axios from "axios";
export const makeRequest = axios.create({
  baseURL: "http://localhost:3400/api/",
  withCredentials: true,
});