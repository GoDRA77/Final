import axios from "axios";

 export const instance = axios.create({
    baseURL: 'http://85.209.9.201/api/v1/',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});