import { Button } from "@mui/material"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useAppDispatch } from "../../../state/Store";
import { useEffect } from "react";
import { paymentSuccess } from "../../../state/customer/orderSlice";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { orderId } = useParams();

  const getQueryParam = (key: string) => {
    const query = new URLSearchParams(location.search)
    return query.get(key)
  }

  useEffect(() => {
    const paymentId = getQueryParam("razorpay_payment_id")
    const paymentLinkId = getQueryParam("razorpay_payment_link_id")

    dispatch(paymentSuccess({
      jwt: localStorage.getItem("jwt") || "",
      paymentId: paymentId || "",
      paymentLinkId: paymentLinkId || ""
    }))

  }, [orderId])

  return (
    <div className="min-h-[90vh] flex justify-center items-center">
      <div className="p-8 bg-[#2BAECC] text-white w-[90%] lg:w-[25%] shadow-xl shadow-gray-500 rounded-md h-[40vh] flex flex-col gap-7 items-center justify-center">
        <h1 className="text-3xl font-semibold">Congratulations!</h1>
        <h1 className="text-2xl font-semibold">Your Order is Successful</h1>
        <div>
          <Button color="secondary" variant="contained" onClick={(() => navigate("/"))}>Shop More</Button>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess