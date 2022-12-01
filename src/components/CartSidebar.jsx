import React, { useEffect } from "react"
import { Button, ListGroup, Offcanvas } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { getCartThunk, purchaseCartThunk } from "../store/slice/cart.slice"

const CartSidebar = ({ show, handleClose }) => {
   const dispatch = useDispatch()
   const cart = useSelector((state) => state.cart)

   useEffect(() => {
      dispatch(getCartThunk())
   }, [])

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
                        <div className="add--cart--products">
                           <div> {cart.title}</div>
                           <br />
                           <div>{cart.productsInCart.quantity}</div>
                           <br />
                           <div>{cart.price}</div>
                        </div>
                     </Link>
                  </ListGroup.Item>
               ))}
            </ListGroup>
         </Offcanvas.Body>
         <Button onClick={() => dispatch(purchaseCartThunk())}>CheckOut</Button>
      </Offcanvas>
   )
}

export default CartSidebar
