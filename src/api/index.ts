import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1/"

const API = axios.create({
  baseURL: API_URL,
  headers: {'Content-Type': 'application/json'}
})

console.log(API_URL)

export default API;