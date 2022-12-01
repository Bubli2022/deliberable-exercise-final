import React, { useEffect, useState } from "react"
import { Carousel, Col, Container, ListGroup, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { addCartThunk } from "../store/slice/cart.slice"

const ProductsDetail = () => {
   const { id } = useParams()

   const dispatch = useDispatch()

   const newProductList = useSelector((state) => state.newProduct)

   const [quantity, setQuantity] = useState(1)

   const newProductDetail = newProductList.find(
      (newProduct) => newProduct.id === Number(id)
   )
   const relatedProducts = newProductList.filter(
      (newProduct) =>
         newProduct.category.id === newProductDetail?.category.id &&
         newProduct.id !== newProductDetail.id
   )
   console.log(relatedProducts)

   useEffect(() => {
      setQuantity(1)
   }, [id])

   const addCart = () => {
      const cart = {
         id: newProductDetail.id,
         quantity: quantity,
      }
      dispatch(addCartThunk(cart))
   }
   return (
      <>
         <Row>
            <Col lg={9} md={8} sm={7} xs={6}>
               <h1>{newProductDetail?.title}</h1>
               <p className="description">{newProductDetail?.description}</p>
            </Col>
            <Col lg={2} md={3} sm={4} xs={5}>
               <ListGroup variant="flush">
                  <ul className="related-products">
                     {relatedProducts.map((newProduct) => (
                        <ListGroup.Item key={newProduct.id}>
                           <Link to={`/products/${newProduct.id}`}>
                              {newProduct.title}
                              <img
                                 src={newProduct.productImgs[0]}
                                 alt=""
                                 className="img-fluid"
                              />
                           </Link>
                        </ListGroup.Item>
                     ))}
                  </ul>
               </ListGroup>
            </Col>
         </Row>
         <Container>
            <div className="quantity" placement="end">
               <Button
                  className="me-1"
                  onClick={() => setQuantity(quantity - 1)}
               >
                  -
               </Button>
               <h4>{quantity}</h4>
               <Button
                  className="ms-3"
                  onClick={() => setQuantity(quantity + 1)}
               >
                  +
               </Button>
               <br />
               <Button
                  onClick={addCart}
                  class="btn btn-danger"
                  variant="danger"
               >
                  Add Cart
               </Button>
            </div>
         </Container>
         <Carousel>
            <Carousel.Item>
               <img
                  className="img-fluid"
                  src={newProductDetail?.productImgs?.[0]}
                  alt=""
                  style={{
                     height: 500,
                     objectFit: "contain",
                     padding: "2rem",
                  }}
               />
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="img-fluid"
                  src={newProductDetail?.productImgs?.[1]}
                  alt=""
                  style={{
                     height: 500,
                     objectFit: "contain",
                     padding: "2rem",
                  }}
               />
            </Carousel.Item>
            <Carousel.Item>
               <img
                  src={newProductDetail?.productImgs?.[2]}
                  alt=""
                  style={{
                     height: 500,
                     objectFit: "contain",
                     padding: "2rem",
                  }}
               />
            </Carousel.Item>
         </Carousel>
      </>
   )
}

export default ProductsDetail
