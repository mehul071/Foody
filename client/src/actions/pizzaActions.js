import axios from "axios";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });

  try {
    const response = await axios.get("api/pizzas/getallpizzas");
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
    console.log(error);
  }
};

export const filterPizzas = (searchKey, option) => async (dispatch) => {
  var FilterPizzas;
  dispatch({ type: "GET_PIZZAS_REQUEST" });

  try {
    const response = await axios.get("/api/pizzas/getallpizzas");
    FilterPizzas = response.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchKey)
    );
    if (option != "all") {
      FilterPizzas = response.data.filter(
        (pizza) => pizza.category.toLowerCase() == option
      );
    }
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: FilterPizzas });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
    console.log(error);
  }
};
