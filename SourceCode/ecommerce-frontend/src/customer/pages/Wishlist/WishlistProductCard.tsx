import { Close } from "@mui/icons-material"
import { Product } from "../../../types/ProductTypes"
import { useAppDispatch } from "../../../state/Store";
import { addProductToWishlist } from "../../../state/customer/wishlistSlice";

const WishlistProductCard = ({ item }: { item: Product }) => {
  const dispatch = useAppDispatch();

  const handleWishlist = () => {
    item.id && dispatch(addProductToWishlist({ productId: item.id }))
  }

  return (
    <div className="relative border border-gray-300 cursor-pointer w-[260px] group">
      <div className="w-[260px] h-[300px] overflow-hidden bg-gray-50 flex items-center justify-center">
        <img
          className="object-cover w-full h-full"
          src={item.images[0]}
          alt=""
        />
      </div>
      <div className="p-2 space-y-1 bg-white">
        <div className="name">
          <h1>{item.seller?.businessDetails.businessName}</h1>
          <p>{item.title}</p>
        </div>
        <div className="price flex items-center gap-3">
          <span className="font-sans font-bold">
            ₹ {item.sellingPrice}/-
          </span>
          <span className="line-through decoration-1 text-gray-400">
            ₹ {item.mrpPrice}/-
          </span>
          <span className="text-[#ff0066] font-semibold">
            {item.discountPercent}% OFF
          </span>
        </div>
      </div>
      <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button onClick={handleWishlist}>
          <Close className="cursor-pointer p-1" sx={{ fontSize: "2rem" }} />
        </button>
      </div>
    </div>
  )
}

export default WishlistProductCard 