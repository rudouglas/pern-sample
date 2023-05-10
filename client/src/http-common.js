import axios from "axios";

export default axios.create({
  baseURL: "https://pern-example.onrender.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
