import axios from "axios";

export default axios.create({
  baseURL: "https://pern-example.onrender.com/api/tutorials",
  headers: {
    "Content-type": "application/json"
  }
});
