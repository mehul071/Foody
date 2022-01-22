import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import Checkout from "../Components/Checkout";
import "./cartScreen.css";
import { addtoCart, deletefromCart } from "../actions/cartAction";
import "aos/dist/aos.css";
import Aos from "aos";

function CartScreen() {
  Aos.init();
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();
  return (
    <div className="cart flex" data-aos="fade-down">
      <div className="cart_items">
        <h1 className="cart_heading">Cart</h1>
        {cartItems.map((item, i) => {
          return (
            <div key={i}>
              <div className="cart_item mb-3 flex">
                <div className="responsive ">
                  <div className="items mr-5 items-center">
                    <h1>{item.name}</h1>
                    <p>
                      price: {item.quantity} * {item.price} = {item.price}
                    </p>
                    <p className="inline-block">
                      Quantity:
                      <AiOutlinePlus
                        className="inline-block plus"
                        onClick={() => {
                          dispatch(
                            addtoCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                      />
                      {item.quantity}
                      <AiOutlineMinus
                        className="inline-block minus"
                        onClick={() => {
                          dispatch(
                            addtoCart(item, item.quantity - 1, item.varient)
                          );
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className="cart_img flex">
                  <img src={item.image} alt="sorry refresh page" />
                  <span className="block trash">
                    <BsTrashFill
                      onClick={() => {
                        dispatch(deletefromCart(item));
                      }}
                    />
                  </span>
                </div>
              </div>
              {/* <hr className="line_under"></hr> */}
            </div>
          );
        })}
      </div>
      <div className=" flex-1 flex flex-col items-end">
        <h1 className="cart_cost">Subtotal: {subtotal} Rs/-</h1>
        <Checkout subtotal={subtotal} />
      </div>
    </div>
  );
}

export default CartScreen;
