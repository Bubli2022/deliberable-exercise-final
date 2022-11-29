import React, { useEffect } from "react"
import { Offcanvas } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getCartThunk } from "../store/slice/cart.slice"

const CartSidebar = ({ show, handleClose }) => {
   const dispatch = useDispatch()
   const cart = useSelector((state) => state.products)

   useEffect(() => {
      dispatch(getCartThunk())
   }, [])

   return (
      <Offcanvas show={show} onHide={handleClose} placement="end">
         <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
         </Offcanvas.Body>
      </Offcanvas>
   )
}

export default CartSidebar
