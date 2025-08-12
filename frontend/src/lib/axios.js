import axios from "axios";

//const BASE_URL = import.meta.env.MODE === "production" ? "http://localhost:8000/api" : "/api";
const BASE_URL = "http://localhost:7004/api"; 

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});