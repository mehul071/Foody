import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";
import "./Filter.css";

function Filter() {
  const [option, setOption] = useState("all");
  const [searchKey, setsearchKey] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="searchbar">
      <div className="filter_bar shadow-lg">
        <input
          type="text"
          value={searchKey}
          onChange={(e) => setsearchKey(e.target.value)}
          placeholder="Search"
          className="search"
        />
        <select
          name="type"
          id="type"
          className="types"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          <option value="all">All</option>
          <option value="veg">Veg</option>
          <option value="nonveg">Non-Veg</option>
        </select>
        <button
          className="filter_btn"
          onClick={() => dispatch(filterPizzas(searchKey, option))}
        >
          Filter
        </button>
      </div>
    </div>
  );
}
export default Filter;
