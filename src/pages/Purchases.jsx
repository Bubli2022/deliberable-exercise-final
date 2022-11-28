import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPurchasesThunk } from "../store/slice/purchases.slice"

const Purchases = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getPurchasesThunk())
   }, [])

   return <div>Purchases</div>
}

export default Purchases
