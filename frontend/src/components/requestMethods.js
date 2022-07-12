import axios from "axios";


const BASE_URL = "http://localhost:8000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmJmOGMxMDZlYzUyZGU4ZTVjNjAwNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTUwOTAzNCwiZXhwIjoxNjQ1NzY4MjM0fQ.xuj2VdoTcspdlLH0yTqHNtwkZTz0C4u6NWBg2EYPw_M"


export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });