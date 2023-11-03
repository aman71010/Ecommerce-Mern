import axios from "axios";

export const BASE_URL = "http://localhost:8080/api";
//export const BASE_URL = "https://eshopmernweb.herokuapp.com/api";

const TOKEN = JSON.parse(localStorage.getItem("profile"))?.accessToken;

export const publicRequest = axios.create({
    baseURL:  BASE_URL
});

export const userRequest = axios.create({
    baseURL:  BASE_URL,
    header:  {token: `Bearer ${TOKEN}`}
});