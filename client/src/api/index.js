import axios from "axios";

const API = axios.create({ baseURL: "https://howard-company-project.herokuapp.com" });

export const createPost = (data) => API.post("/post", data);
