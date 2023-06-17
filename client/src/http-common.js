import axios from "axios";
const PORT = process.env.PORT || 8080;

const baseURL =
  PORT === 8080 ? "http://localhost:8080/api" : `https://0.0.0.0:${PORT}/api`;

export default axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});
