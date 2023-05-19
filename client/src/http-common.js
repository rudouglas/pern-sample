import axios from "axios";
const PORT = process.env.PORT || 8080;

export default axios.create({
  baseURL: `https://0.0.0.0:${PORT}/api/tutorials`,
  headers: {
    "Content-type": "application/json"
  }
});
