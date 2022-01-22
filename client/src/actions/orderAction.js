import axios from "axios";

export const createorder = (subtotal) => async (dispatch, getState) => {
  dispatch({ type: "GET_ORDER_REQUEST" });
  try {
    const response = await axios.post("/api/orders/createorder", { subtotal });
    // console.log(response);
    dispatch({ type: "GET_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ORDER_FAILED", payload: error });
  }
};
