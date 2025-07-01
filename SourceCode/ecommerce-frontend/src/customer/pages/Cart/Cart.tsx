import { LocalOffer } from "@mui/icons-material"
import CartItemCard from "./CartItemCard"
import { Button, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import PricingCard from "./PricingCard"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../state/Store"
import { fetchUserCart } from "../../../state/customer/cartSlice"

const Cart = () => {
  const [couponCode, setCouponCode] = useState("")
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {cart} = useAppSelector(store => store);

  const handleChange = (e: any) => {
    setCouponCode(e.target.value)
  }

  useEffect(() => {
    dispatch(fetchUserCart(localStorage.getItem("jwt") || ""))
  }, [])

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-60 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="cartItemSection lg:col-span-2 space-y-3">
          {cart.cart?.cartItems.map((item) => <CartItemCard item = {item}/>)}
        </div>
        <div className="col-span-1 text-sm space-y-3">
          <div className="w-full max-w-sm mx-auto px-6 py-5 space-y-5 rounded-md border border-gray-200">
            <div className="flex gap-3 text-sm items-center">
              <div className="flex gap-3 text-sm items-center">
                <LocalOffer sx={{ color: "#006699", fontSize: "17px" }} />
              </div>
              <span className="font-semibold">Apply Coupons</span>
            </div>
            <div className="flex gap-2 items-center">
              <TextField onChange={handleChange} id="outlined-basic" placeholder="Coupon Code" size="small" variant="outlined" className="flex-1" />
              <Button size="medium" sx={{ fontWeight: 600 }}>
                Apply
              </Button>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto px-8 py-6 space-y-5 rounded-md border border-gray-200">
            <PricingCard />
            <div>
              <Button
                onClick={() => navigate("/checkout")}
                fullWidth
                variant="contained"
                sx={{ py: "11px", fontWeight: 600 }}
              >   PLACE ORDER
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart