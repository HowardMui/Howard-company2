import * as api from "../api";

export const createPost = async (data, history, setLoading) => {
  try {
    setLoading(true);
    const receivedPost = await api.createPost(data);
    setLoading(false);
    console.log(receivedPost);
    console.log("Saved data.");

    history.push("/submit");
    return receivedPost;
  } catch (err) {
    console.log(err);
    history.push("error");
    return err;
  }
};
