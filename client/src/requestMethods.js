import axios from "axios";

const BASE_URL = "http://localhost:8080/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjEzNTkxM2E4NWRjZmZjZDc2MzE3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzc2MDcwOSwiZXhwIjoxNjM0MDE5OTA5fQ.IKSg_f7aWAlo5NzycdMk1hvuHTxQhA4Ft7wLFEKsUX4";

export const publicRequest = axios.create({
    baseURL:  BASE_URL
});

export const userRequest = axios.create({
    baseURL:  BASE_URL,
    header:  {token: `Bearer ${TOKEN}`}
});