import React, { useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import CartSidebar from "./CartSidebar"

const MyNavbar = () => {
   const logout = () => {
      localStorage.setItem("token", "")
   }
   const [show, setShow] = useState(false)

   const handleClose = () => setShow(false)
   const handleShow = () => setShow(true)

   return (
      <>
         <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
               <Navbar.Brand as={Link} to="/">
                  e-commerce{" "}
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link as={Link} to="/login">
                        <i className="fa-solid fa-user"></i>
                     </Nav.Link>{" "}
                     <Nav.Link as={Link} to="/purchases">
                        <i className="fa-solid fa-box-archive"></i>
                     </Nav.Link>
                     <Nav.Link onClick={handleShow}>
                        <i className="fa-solid fa-cart-shopping"></i>
                     </Nav.Link>
                     <Nav.Link onClick={logout}>
                        <i className="fa-solid fa-user-xmark"></i>
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <CartSidebar show={show} handleClose={handleClose} />
      </>
   )
}

export default MyNavbar
