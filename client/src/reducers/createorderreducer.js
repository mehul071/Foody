export const createorderReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ORDER_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_ORDER_SUCCESS":
      return {
        loading: false,
        success: true,
        order_data: action.payload,
      };
    case "GET_ORDER_FAILED":
      return {
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
