import * as api from "../api";

export const createPost = async (data) => {
  try {
    const receivedPost = await api.createPost(data);

    console.log(receivedPost);
    console.log("Saved data.");
    return receivedPost;
  } catch (err) {
    console.log(err);
  }
};
