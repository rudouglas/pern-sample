import axios from "axios";

export default axios.create({
  baseURL: "https://pern-example.onrender.com/",
  headers: {
    "Content-type": "application/json"
  }
});
