import React, { useEffect } from "react"
import { Col, ListGroup, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getPurchasesThunk } from "../store/slice/purchases.slice"

const Purchases = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const purchases = useSelector((state) => state.purchases)

   useEffect(() => {
      dispatch(getPurchasesThunk())
   }, [])

   return (
      <div>
         {" "}
         <h1>Purchases</h1>
         <ListGroup>
            {purchases.map((purchase) => (
               <ListGroup.Item
                  key={purchase.id}
                  onClick={() =>
                     navigate(`/products/${purchase?.cart.products[0]?.id}`)
                  }
               >
                  <Row>
                     <Col>
                        <b>Product: </b>
                        {purchase?.cart.products[0]?.title}
                     </Col>
                     <Col>
                        {purchase?.cart.products[0]?.productsInCart.quantity}
                     </Col>
                     <Col>{purchase?.cart.products[0]?.price}</Col>
                  </Row>
               </ListGroup.Item>
            ))}
         </ListGroup>
      </div>
   )
}

export default Purchases
