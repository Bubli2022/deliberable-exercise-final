import { HashRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import LoadingScreen from "./components/LoadingScreen"
import MyNavbar from "./components/MyNavbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import ProductsDetail from "./pages/ProductsDetail"
import Purchases from "./pages/Purchases"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getNewProductThunk } from "./store/slice/newProducts.slice"
import { Container } from "react-bootstrap"
import ProtectedRoutes from "./components/ProtectedRoutes"

function App() {
   const isLoading = useSelector((state) => state.isLoading)

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getNewProductThunk())
   }, [])

   return (
      <div className="App">
         <HashRouter>
            <MyNavbar />
            {isLoading && <LoadingScreen />}
            <Container className="mt-5">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products/:id" element={<ProductsDetail />} />
                  <Route path="/login" element={<Login />} />

                  <Route element={<ProtectedRoutes />}>
                     <Route path="/purchases" element={<Purchases />} />
                  </Route>
               </Routes>
            </Container>
         </HashRouter>
      </div>
   )
}

export default App
