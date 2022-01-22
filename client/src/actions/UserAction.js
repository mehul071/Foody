import axios from "axios";

export const registerUser = (user) => (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    axios.post("/api/users/register", user);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
    dispatch(loginUser(user));
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILURE", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/users/login", user);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("current_user", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};
