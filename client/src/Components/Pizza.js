import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import { addtoCart } from "../actions/cartAction";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import "aos/dist/aos.css";
import Aos from "aos";
import Typography from "@mui/material/Typography";
import "./pizza.css";
import Loading from "../Components/Loading";
import { Box, Modal } from "@mui/material";

function Pizza({ pizza }) {
  const style = {
    position: "absolute",
    color: "black",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxheight: 400,
    minwidth: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

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
    <div className="single_pizza sm-3 mb-3" data-aos="zoom-in">
      {loading && <Loading />}
      <Card sx={{ maxWidth: 350 }} className="whole-pizza mb-3">
        <CardMedia
          component="img"
          className="pizza_img cursor-pointer"
          image={pizza.image}
          alt="Pizza image"
          onClick={handleOpen}
        />
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="text-black"
            >
              <img src={pizza.image} />
            </Typography>
            <Typography id="modal-modal-description" sx={{}}>
              {pizza.description}
            </Typography>
            <button className="close_modal" onClick={handleClose}>
              Close
            </button>
          </Box>
        </Modal>
        <Typography
          gutterBottom
          variant="p"
          className="text-center"
          component="div"
        >
          {pizza.name}
        </Typography>
        <div className="select_choice">
          <div>
            <p>varients</p>
            <select
              value={varient}
              onChange={(e) => {
                setvarient(e.target.value);
                console.log(e.target.value);
              }}
            >
              {pizza.varients.map((varient, i) => {
                return <option value={varient}>{varient}</option>;
              })}
            </select>
          </div>
          <div>
            <p>Prices</p>
            <select
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            >
              {[...Array(10).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
          </div>
        </div>
        <CardActions className="price_details">
          <p className="price">Prices:{pizza.prices[0][varient] * quantity}</p>
          <button className="add_cart_btn" onClick={addcart}>
            Add to cart
          </button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Pizza;
