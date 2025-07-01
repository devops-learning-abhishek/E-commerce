import { Route, Routes } from "react-router-dom"
import Dashboard from "../seller/pages/Dashboard/Dashboard"
import Products from "../seller/pages/Products/Products"
import AddProduct from "../seller/pages/Products/AddProduct"
import Orders from "../seller/pages/Orders/Orders"
import Profile from "../seller/pages/Account/SellerProfile"
import Payment from "../seller/pages/Payment/Payment"
import Transaction from "../seller/pages/Payment/Transaction"

const SellerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path='/add-product' element={<AddProduct/>} />
        {/* <Route path='/update-product/:productId' element={<UpdateProductForm />} /> */}
        <Route path='/orders' element={<Orders />} />
        {/* <Route path='/invetory' element={<Invetory />} /> */}
        <Route path='/account' element={<Profile />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/transaction' element={<Transaction/>} />
      </Routes>
    </div>
  )
}

export default SellerRoutes