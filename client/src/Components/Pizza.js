import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Aos from "aos";
import Button from "react-bootstrap/Button";
import "./pizza.css";
import { addtoCart } from "../actions/cartAction";
import Loading from "../Components/Loading";
import Card from "react-bootstrap/Card";
import { Alert } from "@mui/material";

export default function Pizza({ pizza }) {
  Aos.init();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [varient, setvarient] = useState("small");
  const [open, setOpen] = useState(false);
  const [addtocart, setAddtocart] = useState(false);

  const addcart = () => {
    dispatch(addtoCart(pizza, quantity, varient));
    console.log(addcart);
    setAddtocart(true);
    setTimeout(() => {
      setAddtocart(false);
    }, 3000);
    console.log(addcart);
  };

  const pizzaState = useSelector((state) => state.getAllPizzasReducer);
  const { loading, error, success } = pizzaState;
  return (
    <Card style={{ width: "290px", height: "457px" }} className=" pizza p-2">
      {addtocart && <Alert className="mb-2">Successfully added to cart</Alert>}
      <Card.Img variant="top" src={pizza.image} style={{ height: "200px" }} />
      <Card.Body>
        <Card.Title className="text-center pizza_title">
          {pizza.name}
        </Card.Title>
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
        <Button onClick={addcart} className="mt-2" size="sm">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}
