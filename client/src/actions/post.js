import * as api from "../api";

export const createPost = async (data, history, setLoading, setErrorMsg, e) => {
  try {
    setLoading(true);
    const receivedPost = await api.createPost(data);
    setLoading(false);
    console.log(receivedPost);
    console.log("Saved data.");

    history.push("/submit");
    return receivedPost;
  } catch (err) {
    setLoading(false);
    // e.preventDefault();
    console.log(err);
    console.log(err.response);
    setErrorMsg(err.response.data);

    return err;
  }
};
