import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Aos from "aos";
import "./pizza.css";
import { addtoCart } from "../actions/cartAction";
import Loading from "../Components/Loading";
import Card from "react-bootstrap/Card";

export default function Pizza({ pizza }) {
  Aos.init();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [varient, setvarient] = useState("small");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addcart = () => {
    dispatch(addtoCart(pizza, quantity, varient));
  };
  const pizzaState = useSelector((state) => state.getAllPizzasReducer);
  const { loading, error } = pizzaState;
  return (
    <Card style={{ width: "360px" }} className="p-4 pizza">
      <Card.Img variant="top" src={pizza.image} style={{ height: "300px" }} />
      <Card.Body>
        <Card.Title className="text-center">{pizza.name}</Card.Title>
        {/* <div className="flex "> */}
        <Card.Text>
          <div className="flex">
            <p className=" mr-20">Prices:</p>
            <p className="">Quantity:</p>
          </div>
          <select
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
            className="mr-16 border-2"
          >
            {pizza.varients.map((varient, i) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
          <select
            className="border-2"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
