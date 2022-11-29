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
                        Login{" "}
                     </Nav.Link>{" "}
                     <Nav.Link as={Link} to="/purchases">
                        Purchase{" "}
                     </Nav.Link>
                     <Nav.Link onClick={handleShow}>Cart (Sidebar)</Nav.Link>
                     <Nav.Link onClick={logout}>Logout</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <CartSidebar show={show} handleClose={handleClose} />
      </>
   )
}

export default MyNavbar
