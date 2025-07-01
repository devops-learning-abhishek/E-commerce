import { Button } from "@mui/material"
import CategoryGrid from "./CategoryGrid/CategoryGrid"
import Deal from "./Deal/Deal"
import ElectricCategory from "./ElectricCategory/ElectricCategory"
import ShopByCategory from "./ShopByCategory/ShopByCategory"
import { Storefront } from "@mui/icons-material"

import image9 from '../../../assets/images/image9.jpg';
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="space-y-5 lg:space-y-10 relative">
        <ElectricCategory/>

        <CategoryGrid/>
        
        <div className="pt-20">
          <h1 className="text-lg lg:text-4xl font-bold text-[#006699] pb-5 lg:pb-10 text-center">TODAY'S DEAL</h1>
          <Deal/>
        </div>

        <section className="py-20">
          <h1 className="text-lg lg:text-4xl font-bold text-[#006699] pb-5 lg:pb-10 text-center">SHOP BY CATEGORY</h1>
          <ShopByCategory/>
        </section>

        <section className="lg:px-40 relative h-[200px] lg:h-[700px] object-cover">
          <img 
            className="w-full h-full"
            src={image9} alt="" />
            <div className="absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3">
              <h1>Sell your Product</h1>
              <p className="text-lg md:text-2xl">with <span className="logo">ZyraCart</span></p>
              <div className="pt-6 flex justify-center">
                <Button onClick={()=>navigate("/become-seller")} startIcon={<Storefront/>} variant="contained" size="large">
                  Become Seller
                </Button>
              </div>
            </div>
        </section>
      </div>
    </>
  )
}

export default Home
