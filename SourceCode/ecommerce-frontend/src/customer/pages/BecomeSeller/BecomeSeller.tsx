import { useState } from "react"
import SellerAccountForm from "./SellerAccountForm";
import SellerLoginForm from "./SellerLoginForm";
import { Button } from "@mui/material";

import image10 from '../../../assets/images/image10.jpg';

const BecomeSeller = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleShowPage =() => {
    setIsLogin(!isLogin);
  }
  return (
    <div className="grid md:gap-10 grid-cols-3 min-h-screen">
      <section className="lg:col-span-1 md:col-span-2 col-span-3 p-25 shadow-xl rounded-b-md">
        {!isLogin ? <SellerAccountForm/> : <SellerLoginForm/>}
        <div className="mt-8 space-y-2">
          <h1 className="text-center font-medium text-sm">
            {isLogin ? "Don't have an Account?" : "Already have an Account?"}
          </h1>
          <Button onClick={handleShowPage} fullWidth sx={{py:"11px"}} variant="contained" color="success">
            {isLogin ? "Register" : "Login"}
          </Button>
        </div>
      </section>
      <section className="hidden md:col-span-1 lg:col-span-2 md:flex justify-center items-center">
        <div className="lg:w-[58%] px-5 space-y-10">
          <div className="space-y-2 font-bold text-center">
            <p className="text-2xl text-shadow-lg">Join the Marketplace Revolution</p>
            <p className="text-[#ff6699]">Boost your sales today</p>
            <img src={image10} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default BecomeSeller