import React, { useEffect, useState } from "react"
import { Button, ListGroup, Offcanvas } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import {
   deleteCartThunk,
   getCartThunk,
   purchaseCartThunk,
} from "../store/slice/cart.slice"

const CartSidebar = ({ show, handleClose }) => {
   const dispatch = useDispatch()
   const cart = useSelector((state) => state.cart)
   const [total, setTotal] = useState(0)

   useEffect(() => {
      dispatch(getCartThunk())
   }, [])

   useEffect(() => {
      let newTotal = 0
      cart.forEach((product) => {
         newTotal += +product.price * product.productsInCart.quantity
      })
      setTotal(newTotal)
   }, [cart])

   const deleteProductCart = (data) => {
      dispatch(deleteCartThunk(data.id))
   }

   return (
      <Offcanvas show={show} onHide={handleClose} placement="end">
         <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
            <ListGroup>
               {cart?.map((cart) => (
                  <ListGroup.Item key={cart.id}>
                     <Link to={`/products/${cart.id}`}>
                        <i
                           onClick={() => dispatch(deleteProductCart(cart))}
                           class="fa-solid fa-trash"
                           style={{
                              color: "red",
                              position: "relative",
                              left: "321px",
                           }}
                        ></i>

                        <div className="add--cart--products">
                           <div> {cart.title}</div>
                           <br />
                           <div>Quantity: {cart.productsInCart.quantity}</div>
                           <br />
                        </div>
                     </Link>{" "}
                     <div style={{ position: "relative", right: "-273px" }}>
                        {cart.price}
                     </div>
                  </ListGroup.Item>
               ))}
            </ListGroup>
            <b
               style={{
                  position: "relative",
                  right: "-278px",
                  bottom: "-140px",
               }}
            >
               Total: {total}
            </b>
         </Offcanvas.Body>
         <Button onClick={() => dispatch(purchaseCartThunk())}>CheckOut</Button>
      </Offcanvas>
   )
}

export default CartSidebar
