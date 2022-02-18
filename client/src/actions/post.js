import * as api from "../api";

export const createPost = async (data, history, setLoading, setErrorMsg, setSubmit) => {
  try {
    setLoading(true);
    const receivedPost = await api.createPost(data);
    setLoading(false);
    setSubmit(true);
    console.log(receivedPost);
    history.push("/contact/submit");
    return receivedPost;
  } catch (err) {
    setLoading(false);
    setSubmit(false);
    // e.preventDefault();
    console.log(err);
    console.log(err.response);
    setErrorMsg(err.response.data);

    return err;
  }
};
