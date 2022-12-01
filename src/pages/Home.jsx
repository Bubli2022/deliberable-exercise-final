import axios from "axios"
import React, { useEffect, useState } from "react"
import {
   Button,
   Card,
   Col,
   Form,
   InputGroup,
   ListGroup,
   Row,
} from "react-bootstrap"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Home = () => {
   const navigate = useNavigate()
   const newProductList = useSelector((state) => state.newProduct)
   const [categories, setCategories] = useState([])
   const [productFiltered, setProductFiltered] = useState([])
   const [searchValue, setSearchValue] = useState("")

   useEffect(() => {
      axios
         .get(
            "https://e-commerce-api.academlo.tech/api/v1/products/categories/"
         )
         .then((res) => setCategories(res.data.data.categories))
   }, [])

   useEffect(() => {
      setProductFiltered(newProductList)
   }, [newProductList])

   const filterCategory = (categoryId) => {
      const filtered = newProductList.filter(
         (newProduct) => newProduct.category.id === categoryId
      )
      setProductFiltered(filtered)
   }

   const searchProduct = () => {
      const filtered = newProductList.filter((newProduct) =>
         newProduct.title
            .toLowerCase()
            .includes(searchValue.toLocaleLowerCase())
      )
      setProductFiltered(filtered)
   }

   return (
      <Row>
         <Col lg={3}>
            <ListGroup>
               {categories.map((category) => (
                  <ListGroup.Item
                     key={category.id}
                     onClick={() => filterCategory(category.id)}
                     style={{ cursor: "pointer" }}
                  >
                     {category.name}
                  </ListGroup.Item>
               ))}
            </ListGroup>
         </Col>
         <Col lg={9}>
            <InputGroup className="mb-3">
               <Form.Control
                  placeholder="Search Product"
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
               />
               <Button variant="outline-secondary" onClick={searchProduct}>
                  Button
               </Button>
            </InputGroup>
            <Row xs={1} md={2} xl={3} className="g-4">
               {productFiltered.map((newProduct) => (
                  <Col key={newProduct.id}>
                     <Card
                        onClick={() => navigate(`/products/${newProduct.id}`)}
                        style={{ height: "100%", cursor: "pointer" }}
                     >
                        <Card.Img
                           variant="top"
                           src={newProduct.productImgs[0]}
                           style={{
                              height: 200,
                              objectFit: "contain",
                              padding: "2rem",
                           }}
                        />
                        <Card.Body>
                           <Card.Title>{newProduct.title}</Card.Title>
                           <Card.Text>{newProduct.description}</Card.Text>
                        </Card.Body>
                     </Card>
                  </Col>
               ))}
            </Row>
         </Col>
      </Row>
   )
}

export default Home
