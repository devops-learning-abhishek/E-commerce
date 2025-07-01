import { Divider } from "@mui/material"
import ReviewCard from "./ReviewCard"

const Review = () => {
  return (
    <div className="p-5 lg:px-50 flex flex-col lg:flex-row gap-20">
      <section className="w-full md:w-1/2 lg:w-[35%] space-y-2">
        <img src="https://assets.ajio.com/medias/sys_master/root/20240816/KGbP/66bf7e316f60443f31101051/-1117Wx1400H-700293833-teal-MODEL3.jpg" alt="" />
        <div className="bg-gray-100 p-3 shadow-xl">
          <div>
            <p className="font-bold text-xl">WESTUX</p>
            <p className="test-lg text-gray-600">Women Traditional Saree</p>
          </div>
          <div>
            <div className="price flex items-center gap-4 mt-5 text-2xl">
              <span className="font-sans text-black font-bold">
                ₹7410/-
              </span>
              <span className="line-through decoration-1 text-gray-400 text-xl">
                ₹9999/-
              </span>
              <span className="text-[#ff0066] font-medium">
                70% OFF
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full space-y-4">
        {[1, 1, 1, 1, 1].map(() =>
          <div className="space-y-6">
            <ReviewCard />
            <Divider />
          </div>
        )}
      </section>
    </div>
  )
}

export default Review