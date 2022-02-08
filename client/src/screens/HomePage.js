import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../Components/Loading";
import Pizza from "../Components/Pizza";
import Error from "../Components/Error";
import Filter from "../Components/Filter";
import Row from "react-bootstrap/Row";
import "./HomePage.css";

function HomePage() {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzaState;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div className="store">
      <div className="container">
        <Filter />
        <div className="row single_pizza">
          {loading ? (
            <div>
              <Loading />
            </div>
          ) : error ? (
            <div>
              <Error error="Something went wrong" />
            </div>
          ) : (
            pizzas.map((pizza, i) => {
              return (
                <div value={i} className="col-md-4">
                  <Pizza pizza={pizza} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
