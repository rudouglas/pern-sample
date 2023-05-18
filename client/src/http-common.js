import axios from "axios";
const PORT = process.env.PORT || 8080;

export default axios.create({
  baseURL: `https://localhost:${PORT}/api/tutorials`,
  headers: {
    "Content-type": "application/json"
  }
});
