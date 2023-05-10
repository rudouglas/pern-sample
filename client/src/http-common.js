import axios from "axios";

export default axios.create({
  baseURL: "https://0.0.0.0:10000/api",
  headers: {
    "Content-type": "application/json"
  }
});
