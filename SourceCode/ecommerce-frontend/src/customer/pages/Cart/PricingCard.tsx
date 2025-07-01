import { Divider } from "@mui/material"

const PricingCard = () => {
  return (
    <>
      <div className="space-y-3 p-1">
        <div className="flex justify-between items-center">
          <span>Total MRP</span>
          <span>₹2000/-</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Coupon Discount</span>
          <span>₹400/-</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Shipping Fee</span>
          <span>FREE</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Platform Fee</span>
          <span>₹40/-</span>
        </div></div>
      <Divider />
      <div className="flex justify-between items-center pt-4">
        <span className="text-lg font-semibold">Total Amount</span>
        <span className="text-lg font-semibold">₹1640/-</span>
      </div>
    </>
  )
}

export default PricingCard