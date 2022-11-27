import React from "react"
import { Col, ListGroup, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"

const ProductsDetail = () => {
   const { id } = useParams()
   const newProductList = useSelector((state) => state.newProduct)
   const newProductDetail = newProductList.find(
      (newProduct) => newProduct.id === Number(id)
   )
   const relatedProducts = newProductList.filter(
      (newProduct) => newProduct.category.id === newProductDetail.category.id
   )
   console.log(relatedProducts)
   return (
      <Row>
         <Col>
            <h1>{newProductDetail?.title}</h1>
            <p>{newProductDetail?.description}</p>
            <img
               className="img-fluid"
               src={newProductDetail?.productImgs?.[0]}
               alt=""
               width={"100%"}
            />
            <img
               src={newProductDetail?.productImgs?.[1]}
               alt=""
               width={"100%"}
            />
            <img
               src={newProductDetail?.productImgs?.[2]}
               alt=""
               width={"100%"}
            />
         </Col>
         <Col lg={3}>
            <ListGroup variant="flush">
               <ul>
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
   )
}

export default ProductsDetail
